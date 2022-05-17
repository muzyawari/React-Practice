import React from "react";

export default function TodoForm({ input, handleInputForm }) {
  return (
    <form action="">
      <div className="mb-4">
        <h1 className="text-gray-900 text-2xl mb-6 font-semibold">Todo List</h1>
        <div className="flex mt-4 mb-6">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-zinc-600"
            placeholder="Add Todo"
            value={input}
            onChange={handleInputForm}
          />
          <button className="flex-no-shrink p-2 border-2 rounded text-teal-400 border-teal-200 hover:text-white hover:bg-teal-400">
            Add
          </button>
        </div>
      </div>

      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          datepicker
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
        />
      </div>
    </form>
  );
}
