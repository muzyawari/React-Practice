import { useState } from "react";

import DatePicker from "./datepicker";

export default function Modal({
  item,
  setModal,
  handleDateForm,
  handleDateAdd,
  handleInputForm,
}) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [date, setDate] = useState(item.time_due);

  console.log(date);

  let toTimestamp = (date) => Date.parse(date);

  console.log(toTimestamp);

  const updateEditToDo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/todos/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          date,
        }),
      });
      console.log(response);
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div id={`id${item.id}`}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto w-96">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">
              <form action="">
                <div className="mb-4">
                  <label className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">
                    Todo Item
                  </label>
                  <div className="flex mt-4 mb-6">
                    <input
                      type="text"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">
                    Description
                  </label>
                  <input
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Describe your todo item further..."
                    value={description !== null ? description : ""}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>

                <div className="mb-4">
                  <label className="block text-base font-medium text-gray-900 dark:text-gray-400 mb-4">
                    Due Date for Todo Item
                  </label>
                  <div className="flex">
                    <input
                      type="date"
                      id="website-admin"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={date !== null ? date : ""}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
              <button
                className="flex-no-shrink p-2  border-2  mr-2 rounded text-rose-300 border-rose-300 hover:text-white hover:bg-rose-300"
                onClick={() => setModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-8"
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
              <button
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-300 hover:bg-green-300"
                onClick={(e) => {
                  setModal(false);
                  updateEditToDo(e);
                  // handleDateAdd(item.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-10"
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
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
