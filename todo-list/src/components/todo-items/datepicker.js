import { useState } from "react";

export default function DatePicker({ date, setDate }) {
  return (
    <div className="mb-4">
      <label className="block text-base font-medium text-gray-900 dark:text-gray-400 mb-4">
        Due Date for Todo Item
      </label>
      <div className="flex">
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="website-admin"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={date}
        />
      </div>
    </div>
  );
}
