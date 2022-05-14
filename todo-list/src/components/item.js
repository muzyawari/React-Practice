import React from "react";

export default function Item({
  i,
  done,
  handleStrikeItem,
  handleRemoveItem,
  item,
}) {
  return (
    <div className="flex  items-center rounded shadow pt-4 pb-4 mb-2">
      <p
        className={`w-full text-grey-darkest pl-4 ${
          done === i ? "line-through text-green-400" : ""
        }`}
      >
        {item}
      </p>

      <button
        className="flex-no-shrink w-28 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-300 hover:bg-green-300"
        onClick={(e) => handleStrikeItem(e, i)}
      >
        Done
      </button>
      <button
        className="flex-no-shrink w-28 p-2 ml-2 border-2  mr-4 rounded text-rose-300 border-rose-300 hover:text-white hover:bg-rose-300"
        onClick={handleRemoveItem}
      >
        Remove
      </button>
    </div>
  );
}
