import { useState, useContext } from "react";

import { ItemContext } from "../../contexts/items.context";

import Modal from "./modal";
import DateComparison from "./dateComparison";

export default function Item({
  handleStrikeItem,
  handleUndoItem,
  handleRemoveItem,
  handleDateAdd,
  handleInputForm,
  item,
  tab,
}) {
  const [modal, setModal] = useState(false);

  if (tab === 1 && !item.completed) {
    return (
      <>
        <div className="flex items-center rounded shadow pt-4 pb-4 mb-2 max-w-full">
          <button
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-300 hover:bg-green-300"
            onClick={() => handleStrikeItem(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
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

          <div className="w-4/12">
            <p className={` text-zinc-600 pl-4`}>{item.input}</p>
          </div>
          <DateComparison time={item.timestamp} />
          <button
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-zinc-300 border-zinc-300 hover:bg-zinc-300"
            onClick={() => setModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button
            className="flex-no-shrink p-2 ml-2 border-2  mr-4 rounded text-rose-300 border-rose-300 hover:text-white hover:bg-rose-300"
            onClick={() => handleRemoveItem(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
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

        {modal ? (
          <Modal
            setModal={setModal}
            item={item}
            handleDateAdd={handleDateAdd}
            handleInputForm={handleInputForm}
          />
        ) : null}
      </>
    );
  } else if (tab === 2 && item.completed) {
    return (
      <>
        <div className="flex items-center rounded shadow pt-4 pb-4 mb-2">
          <button
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-amber-300 border-amber-300 hover:bg-amber-200"
            onClick={() => handleUndoItem(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
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
          <p
            className={`w-full text-zinc-600 pl-4 ${
              item.completed ? "line-through text-slate-300" : ""
            }`}
          >
            {item.input}
          </p>

          <button
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-zinc-300 border-zinc-300 hover:bg-zinc-300"
            onClick={() => setModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button
            className="flex-no-shrink p-2 ml-2 border-2 mr-4 rounded text-rose-300 border-rose-300 hover:text-white hover:bg-rose-300"
            onClick={() => handleRemoveItem(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
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
        {modal ? <Modal setModal={setModal} item={item} /> : null}
      </>
    );
  }
}
