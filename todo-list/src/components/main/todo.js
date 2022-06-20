import { useState, useEffect, useContext } from "react";

import { ItemContext } from "../../contexts/items.context";

import { Draggable } from "react-beautiful-dnd";

import Item from "../todo-items/item";
import TodoForm from "../form/todoForm";
import Tab from "../tabs/tab";

export default function Todo() {
  const [title, setTitle] = useState("");

  const [tab, setTab] = useState(1);

  const { items, setItems, date, setDate } = useContext(ItemContext);

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
      ...items,
      {
        title,
      },
    ]);

    setTitle("");
  };

  function handleInputForm(e) {
    const target = e.target.value;
    setTitle(target);
  }

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
            <Item tab={tab} item={item} setDate={setDate} />
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
