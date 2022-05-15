import React from "react";

export default function Item({
  done,
  handleStrikeItem,
  handleRemoveItem,
  item,
  tab,
}) {
  if (tab === 1) {
    return (
      <>
        {!item.completed ? (
          <div className="flex items-center rounded shadow pt-4 pb-4 mb-2">
            <p className={`w-full text-zinc-600 pl-4`}>{item.input}</p>

            <button
              className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-300 hover:bg-green-300"
              onClick={() => handleStrikeItem(item.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button
              className="flex-no-shrink p-2 ml-2 border-2  mr-4 rounded text-rose-300 border-rose-300 hover:text-white hover:bg-rose-300"
              onClick={() => handleRemoveItem(item.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="italic pl-2 text-sm pt-4">
            <p>No items in your todo list</p>
          </div>
        )}
      </>
    );
  } else if (tab === 2) {
    return (
      <>
        {item.completed ? (
          <div className="flex items-center rounded shadow pt-4 pb-4 mb-2">
            <p
              className={`w-full text-zinc-600 pl-4 ${
                item.completed ? "line-through text-slate-300" : ""
              }`}
            >
              {item.input}
            </p>

            <button
              className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-amber-300 border-amber-300 hover:bg-amber-200"
              onClick={() => handleStrikeItem(item.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <button
              className="flex-no-shrink p-2 ml-2 border-2  mr-4 rounded text-rose-300 border-rose-300 hover:text-white hover:bg-rose-300"
              onClick={() => handleRemoveItem(item.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="italic pl-2 text-sm pt-4">
            <p>No items completed</p>
          </div>
        )}
      </>
    );
  }
}
