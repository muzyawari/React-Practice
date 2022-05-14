import { useState } from "react";
import Item from "./item";

export default function Todo() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [done, setDone] = useState([]);

  function handleSubmitForm(e) {
    e.preventDefault();

    if (!input) {
      return;
    }

    setItems([...items, input]);

    setInput("");
  }

  function handleInputForm(e) {
    const target = e.target.value;
    setInput(target);
  }

  function handleRemoveItem(e) {
    const target =
      e.target.previousElementSibling.previousElementSibling.textContent;

    let removeItem = items.filter((item) => {
      return item !== target;
    });

    setItems(removeItem);
  }

  function handleStrikeItem(e, i) {
    const target = e.target.previousElementSibling.textContent;
    console.log(i);

    let strikeItems = items.map((item, index) => {
      console.log(index);
      if (item === target) {
        setDone(i);
      }
    });

    // console.log(result);

    // if (strikeItem) {
    //   setDone((prevDone) => !prevDone);
    // }
  }

  return (
    <div
      className="h-100 w-full flex items-center justify-center font-sans"
      onSubmit={handleSubmitForm}
    >
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <form action="">
          <div className="mb-4">
            <h1 className="text-gray-900 text-2xl mb-6 font-semibold">
              Todo List
            </h1>
            <div className="flex mt-4 mb-6">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                value={input}
                onChange={handleInputForm}
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-teal-400 border-teal-200 hover:text-white hover:bg-teal-600">
                Add
              </button>
            </div>
          </div>
        </form>
        <div>{items.length === 0 && <p>Add your first todo item</p>}</div>
        {items.map((item, i) => (
          <Item
            key={i}
            i={i}
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
