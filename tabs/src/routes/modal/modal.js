import { useState } from "react";

import "./modal.styles.css";

export default function Modal() {
  const [open, setOpen] = useState(false);

  function handleModalOpen(e) {
    e.stopPropagation();
    setOpen(!open);
  }

  return (
    <div className={open ? "modal-is-open" : ""}>
      <main>
        <div className="wrap">
          <button className="button jsModalButton" onClick={handleModalOpen}>
            Click me!
          </button>
          <svg className="point-hand" viewBox="0 0 58 66"></svg>
        </div>
      </main>

      <div className="modal-overlay jsModalOverlay" onClick={handleModalOpen}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal__content">
            <svg
              className="wave-hand"
              width="112"
              height="139"
              viewBox="0 0 112 139"
            ></svg>
            <button
              className="modal__close-button jsModalClose"
              onClick={handleModalOpen}
            >
              <svg width="1em" height="1em" viewBox="0 0 18 18"></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
