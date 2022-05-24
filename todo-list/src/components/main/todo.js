import { useState, useEffect } from "react";

import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

import db from "../../firebase";

import Item from "../todo-items/item";
import TodoForm from "../form/todoForm";
import Tab from "../tabs/tab";

export default function Todo() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");

  const [tab, setTab] = useState(1);

  const colRef = collection(db, "todo-items");

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(colRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  console.log(items);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!input) return;
    setItems([
      {
        input: input,
        completed: false,
        timestamp: date,
      },
      ...items,
    ]);

    await addDoc(colRef, {
      input: input,
      completed: false,
      timestamp: date,
    });

    setInput("");
  };

  function handleInputForm(e) {
    const target = e.target.value;
    setInput(target);
  }

  function handleDateForm(e) {
    const target = e.target.value;
    setDate(target);
  }

  function handleRemoveItem(id) {
    const removeItem = items.filter((item) => {
      return item.id !== id;
    });

    setItems(removeItem);
  }

  function handleStrikeItem(id) {
    const filter = items
      .filter((item) => item.id !== id)
      .concat(
        items.filter((item) => {
          return item.id === id;
        })
      );

    const complete = filter.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    setItems(complete);
  }

  return (
    <div
      className="h-100 w-full flex items-center justify-center font-sans"
      onSubmit={handleSubmitForm}
    >
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <TodoForm input={input} handleInputForm={handleInputForm} />

        <div className="italic pl-2 text-sm pt-4">
          {items.length === 0 ? (
            <p>Add your first todo item</p>
          ) : (
            <Tab tab={tab} setTab={setTab} />
          )}
        </div>
        {items.map((item) => (
          <Item
            tab={tab}
            key={item.id}
            item={item}
            date={date}
            setDate={setDate}
            handleRemoveItem={handleRemoveItem}
            handleStrikeItem={handleStrikeItem}
            handleDateForm={handleDateForm}
          />
        ))}
      </div>
    </div>
  );
}
