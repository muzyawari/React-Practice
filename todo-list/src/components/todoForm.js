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
          <button className="flex-no-shrink p-2 border-2 rounded text-teal-400 border-teal-200 hover:text-white hover:bg-teal-600">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
