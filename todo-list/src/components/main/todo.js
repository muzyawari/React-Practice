import { useState, useEffect, useContext } from "react";

import { ItemContext } from "../../contexts/items.context";

import { Draggable } from "react-beautiful-dnd";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import db from "../../firebase";

import Item from "../todo-items/item";
import TodoForm from "../form/todoForm";
import Tab from "../tabs/tab";

export default function Todo() {
  const [title, setTitle] = useState("");

  const [tab, setTab] = useState(1);

  const { items, setItems, date, setDate } = useContext(ItemContext);

  const colRef = collection(db, "todo-items");

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!title) return;

    try {
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      });
      console.log(title);
      console.log(JSON.stringify(title));

      console.log(response);
    } catch (e) {
      console.error(e.message);
    }
    setItems([
      {
        title,
      },
      ...items,
    ]);

    setTitle("");

    // await addDoc(colRef, {
    //   id: items.length + 1,
    //   input: input,
    //   completed: false,
    // });
  };

  const handleDateAdd = async (id) => {
    const dateAdd = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          timestamp: date,
        };
      }
      return item;
    });

    setItems(dateAdd);

    const q = query(colRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      updateDoc(doc.ref, {
        timestamp: date,
      });
    });
  };

  function handleInputForm(e) {
    const target = e.target.value;
    setTitle(target);
  }

  const handleRemoveItem = async (id) => {
    const removeItem = items.filter((item) => {
      return item.id !== id;
    });

    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setItems(removeItem);
    } catch (err) {
      console.error(err.message);
    }

    // const datas = await getDocs(colRef);
    // datas.forEach((data) => {
    //   deleteDoc(data.ref, "todo-items", id);
    // });

    // const itemDoc = doc(db, "todo-items", id);
    // await deleteDoc(itemDoc, "todo-items", id);
  };

  const handleStrikeItem = async (id) => {
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
          completed: true,
        };
      }
      return item;
    });

    setItems(complete);

    updateToDoComplete(id);

    // const q = query(colRef, where("id", "==", id));
    // const querySnapshot = await getDocs(q);

    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   updateDoc(doc.ref, {
    //     completed: true,
    //   });
    // });
  };

  const updateToDoComplete = async (id) => {
    try {
      const updateTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: true,
        }),
      });
      console.log(updateTodo);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleUndoItem = async (id) => {
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
          completed: false,
        };
      }
      return item;
    });

    setItems(complete);

    const q = query(colRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      updateDoc(doc.ref, {
        completed: false,
      });
    });
  };

  return (
    <div
      className="h-100 w-full flex items-center justify-center font-sans"
      onSubmit={handleSubmitForm}
    >
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <TodoForm title={title} handleInputForm={handleInputForm} />

        <div className="italic pl-2 text-sm pt-4">
          {items.length === 0 ? (
            <p>Add your first todo item</p>
          ) : (
            <Tab tab={tab} setTab={setTab} />
          )}
        </div>

        {items.map((item, index) => {
          // const string = item.id.toString();
          return (
            <Item
              tab={tab}
              key={item.id}
              item={item}
              setDate={setDate}
              handleRemoveItem={handleRemoveItem}
              handleStrikeItem={handleStrikeItem}
              handleUndoItem={handleUndoItem}
              handleDateAdd={handleDateAdd}
              handleInputForm={handleInputForm}
            />
            // <Draggable key={item.id} draggableId={string} index={index}>
            // {(provided) => (
            //   <div
            //     ref={provided.innerRef}
            //     {...provided.draggableProps}
            //     {...provided.dragHandleProps}
            //   >

            //   </div>
            // )}
            // </Draggable>
          );
        })}
      </div>
    </div>
  );
}
