import { useState } from "react";

import "./calculator.styles.css";

export default function Calculator() {
  const [value, setValue] = useState("");

  function buttonValue(e) {
    const item = e.target.textContent;
    setValue(value.concat(item));
  }

  function handleClearButton() {
    setValue("");
  }

  function handleEqualButton() {
    try {
      setValue(eval(value).toString());
    } catch (err) {
      setValue("Error");
    }
  }
  return (
    <div className="container">
      <div className="calculator">
        <div className="calculator__display">{value}</div>

        <div className="calculator__keys">
          <button
            data-key="plus"
            onClick={buttonValue}
            data-button-type="operator"
          >
            +
          </button>
          <button
            data-key="minus"
            onClick={buttonValue}
            data-button-type="operator"
          >
            -
          </button>
          <button
            data-key="times"
            onClick={buttonValue}
            data-button-type="operator"
          >
            *
          </button>
          <button
            data-key="divide"
            onClick={buttonValue}
            data-button-type="operator"
          >
            /
          </button>
          <button data-key="1" onClick={buttonValue} data-button-type="number">
            1
          </button>
          <button data-key="2" onClick={buttonValue} data-button-type="number">
            2
          </button>
          <button data-key="3" onClick={buttonValue} data-button-type="number">
            3
          </button>
          <button data-key="4" onClick={buttonValue} data-button-type="number">
            4
          </button>
          <button data-key="5" onClick={buttonValue} data-button-type="number">
            5
          </button>
          <button data-key="6" onClick={buttonValue} data-button-type="number">
            6
          </button>
          <button data-key="7" onClick={buttonValue} data-button-type="number">
            7
          </button>
          <button data-key="8" onClick={buttonValue} data-button-type="number">
            8
          </button>
          <button data-key="9" onClick={buttonValue} data-button-type="number">
            9
          </button>
          <button data-key="0" onClick={buttonValue} data-button-type="number">
            0
          </button>
          <button
            data-key="decimal"
            onClick={buttonValue}
            data-button-type="decimal"
          >
            .
          </button>
          <button
            data-key="clear"
            onClick={handleClearButton}
            data-button-type="clear"
          >
            AC
          </button>
          <button
            data-key="equal"
            onClick={handleEqualButton}
            data-button-type="equal"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
