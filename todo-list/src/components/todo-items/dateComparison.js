import { useEffect } from "react";

export default function DateComparison({ date }) {
  const inputDate = date.split("-");
  const countDownDate = new Date(
    inputDate[0],
    inputDate[1].substring(1),
    inputDate[2],
    24
  ).getTime();

  return (
    <div
      id="alert-1"
      className="flex p-2 mr-1 bg-blue-100 rounded-lg w-8/12"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-3 stroke-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="ml-3 text-sm font-medium text-blue-400">
        Due in 5 days
      </div>
    </div>
  );
}
