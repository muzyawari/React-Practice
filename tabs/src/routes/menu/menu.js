import { useState } from "react";

import "./menu.styles.css";

export default function Menu() {
  const [open, setOpen] = useState(false);

  function handleModalOpen() {
    setOpen((prevOpen) => !prevOpen);
  }
  return (
    <div className={open ? "offsite-is-open" : ""}>
      <div className="offsite-container">
        <nav className="nav">
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Work</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="site-container">
        <h1>Click the button to open the sidebar!</h1>
        <button onClick={handleModalOpen}>
          <span>Menu</span>
        </button>
      </div>
    </div>
  );
}
