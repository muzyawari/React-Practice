import { useState, useEffect } from "react";

import Alert from "./alert";

export default function DateComparison({ time }) {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  useEffect(() => {
    if (time !== "") {
      const inputDate = time.split("-");
      const countDownDate = new Date(
        inputDate[0],
        inputDate[1].substring(1) - 1,
        inputDate[2],
        24
      );

      const intervalID = setInterval(() => {
        const now = new Date().getTime();

        const difference = countDownDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        setTimerDays(days);

        const hours = Math.ceil(difference / 1000 / 60 / 60);
        setTimerHours(hours);

        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimerMinutes(minutes);

        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimerSeconds(seconds);

        if (hours < 10 || minutes < 10 || seconds < 10) {
          const hoursAmount = parseInt(hours.toString().padStart(2, "0"));

          const minutesAmount = parseInt(minutes.toString().padStart(2, "0"));

          const secondsAmount = parseInt(seconds.toString().padStart(2, "0"));

          setTimerSeconds(secondsAmount);
        }
      }, 1000);

      return () => {
        clearTimeout(intervalID);
      };
    }
  });

  const addLeadingZeros = (num, totalLength) => {
    return String(num).padStart(totalLength, "0");
  };

  if (time) {
    return (
      <>
        {timerHours > 24 ? (
          <div
            id="alert-1"
            className="flex p-2 mr-2 bg-blue-100 rounded-lg w-5/12"
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
            <div className="ml-2 text-sm font-sm text-blue-400">
              {timerDays !== 1
                ? `Due in ${timerDays} days`
                : `Due in ${timerDays} day`}
            </div>
          </div>
        ) : (
          <Alert
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
        )}
      </>
    );
  } else {
    return (
      <div
        id="alert-1"
        className="flex p-2 mr-2 bg-neutral-100 rounded-lg w-5/12"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-3 stroke-neutral-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        <div className="ml-3 text-sm font-sm text-neutral-400">
          Set due date
        </div>
      </div>
    );
  }
}
