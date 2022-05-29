export default function Alert({ timerHours, timerMinutes, timerSeconds }) {
  if (timerHours > 0) {
    return (
      <div
        id="alert-2"
        className="flex p-2 mr-3 bg-red-100 rounded-lg w-5/12"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-3 stroke-red-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div className="ml-2 text-sm font-medium text-red-400 ">
          {timerHours} : {timerMinutes} : {timerSeconds}
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="alert-2"
        className="flex p-2 mr-2 bg-red-100 rounded-lg w-5/12"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-3 stroke-red-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div className="ml-2 text-sm font-sm text-red-400 ">
          Overdue by {-timerHours} hours
        </div>
      </div>
    );
  }
}
