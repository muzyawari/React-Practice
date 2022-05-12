import { useState, useEffect } from "react";

import Open from "./open";

export default function Popup() {
  const [trigger, setTrigger] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  const handleTriggerClick = (e) => {
    setTrigger(true);
  };

  const handleClosePopup = (e) => {
    setTrigger(false);
  };
  return (
    <main>
      <h1>React Popups</h1>
      <button onClick={handleTriggerClick}>Open Popup</button>
      <Open trigger={trigger} handleClick={setTrigger}>
        My Popup
      </Open>

      <Open trigger={timedPopup} handleClick={setTimedPopup}>
        Timed Popup
      </Open>
    </main>
  );
}
