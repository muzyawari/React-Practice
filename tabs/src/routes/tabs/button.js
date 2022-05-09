import React from "react";

export default function Button({ tab, tabHandleClick }) {
  return (
    <div className="tabs">
      <button
        className={`tab ${tab === 1 ? "is-selected" : ""}`}
        onClick={() => {
          tabHandleClick(1);
        }}
        data-theme="digimon"
      >
        Digimon
      </button>
      <button
        className={`tab ${tab === 2 ? "is-selected" : ""}`}
        data-theme="pokemon"
        onClick={() => {
          tabHandleClick(2);
        }}
      >
        Pokemon
      </button>
      <button
        className={`tab ${tab === 3 ? "is-selected" : ""}`}
        data-theme="tamagotchi"
        onClick={() => {
          tabHandleClick(3);
        }}
      >
        Tamagotchi
      </button>
    </div>
  );
}
