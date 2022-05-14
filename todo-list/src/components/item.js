import React from "react";

export default function Item({
  done,
  handleStrikeItem,
  handleRemoveItem,
  item,
}) {
  return (
    <div className="flex  items-center rounded shadow pt-4 pb-4 mb-2">
      <p
        className={`w-full text-zinc-600 pl-4 ${
          item.completed ? "line-through text-slate-200" : ""
        }`}
      >
        {item.input}
      </p>

      <button
        className="flex-no-shrink w-28 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-300 hover:bg-green-300"
        onClick={() => handleStrikeItem(item.id)}
      >
        Done
      </button>
      <button
        className="flex-no-shrink w-28 p-2 ml-2 border-2  mr-4 rounded text-rose-300 border-rose-300 hover:text-white hover:bg-rose-300"
        onClick={() => handleRemoveItem(item.id)}
      >
        Remove
      </button>
    </div>
  );
}
