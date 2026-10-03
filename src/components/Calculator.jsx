import { useEffect, useState } from "react";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState("");

  const appendValue = (value) => {
    setDisplayValue((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplayValue("");
  };

  const deleteLast = () => {
    setDisplayValue((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    setDisplayValue((prev) => {
      if (prev === "") {
        return prev;
      }

      try {
        const expression = prev.replace(/%/g, "/100");

        // Same evaluation logic as the original script.js
        // eslint-disable-next-line no-eval
        const result = eval(expression);

        if (!isFinite(result)) {
          return "Error";
        }

        return result;
      } catch (error) {
        return "Error";
      }
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (
        !isNaN(key) ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
      ) {
        appendValue(key);
      }

      if (key === "Enter" || key === "=") {
        calculate();
      }

      if (key === "Backspace") {
        deleteLast();
      }

      if (key === "Escape") {
        clearDisplay();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [appendValue, calculate, deleteLast, clearDisplay]);

  return (
    <div className="calculator">
      <div className="calculator-header">
        <h1>Calculator</h1>
        <p>Simple &amp; Modern</p>
      </div>

      <div className="display">
        <input type="text" id="display" value={displayValue} readOnly />
      </div>

      <div className="buttons">
        <button type="button" className="clear" onClick={clearDisplay}>
          AC
        </button>
        <button type="button" className="delete" onClick={deleteLast}>
          DEL
        </button>
        <button type="button" className="operator" onClick={() => appendValue("%")}>
          %
        </button>
        <button type="button" className="operator" onClick={() => appendValue("/")}>
          ÷
        </button>

        <button type="button" onClick={() => appendValue("7")}>
          7
        </button>
        <button type="button" onClick={() => appendValue("8")}>
          8
        </button>
        <button type="button" onClick={() => appendValue("9")}>
          9
        </button>
        <button type="button" className="operator" onClick={() => appendValue("*")}>
          ×
        </button>

        <button type="button" onClick={() => appendValue("4")}>
          4
        </button>
        <button type="button" onClick={() => appendValue("5")}>
          5
        </button>
        <button type="button" onClick={() => appendValue("6")}>
          6
        </button>
        <button type="button" className="operator" onClick={() => appendValue("-")}>
          −
        </button>

        <button type="button" onClick={() => appendValue("1")}>
          1
        </button>
        <button type="button" onClick={() => appendValue("2")}>
          2
        </button>
        <button type="button" onClick={() => appendValue("3")}>
          3
        </button>
        <button type="button" className="operator" onClick={() => appendValue("+")}>
          +
        </button>

        <button type="button" className="zero" onClick={() => appendValue("0")}>
          0
        </button>
        <button type="button" onClick={() => appendValue(".")}>
          .
        </button>
        <button type="button" className="equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}
