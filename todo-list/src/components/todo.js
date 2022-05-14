import { useState } from "react";
import Item from "./item";
import TodoForm from "./todoForm";

export default function Todo() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [done, setDone] = useState([]);

  function handleSubmitForm(e) {
    e.preventDefault();

    if (!input) {
      return;
    }

    setItems([
      {
        id: items.length + 1,
        input: input,
        completed: false,
      },
      ...items,
    ]);

    setInput("");
  }

  function handleInputForm(e) {
    const target = e.target.value;
    setInput(target);
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
        <div className="italic pl-2">
          {items.length === 0 && <p>Add your first todo item</p>}
        </div>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
            handleStrikeItem={handleStrikeItem}
            done={done}
          />
        ))}
      </div>
    </div>
  );
}
