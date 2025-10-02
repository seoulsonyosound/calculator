import React, { useState } from "react";
import "./App.css";

function Display({ value }) {
  return <div className="display">{value}</div>;
}

function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [display, setDisplay] = useState("0");
  const [operand, setOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [firstOperand, setFirstOperand] = useState("");

  const handleNumberClick = (label) => {
    let newOperand = operand;
    if (operand === "" && label === "0") {
      newOperand = "0";
    } else if (operand === "0") {
      newOperand = label;
    } else {
      newOperand = operand + label;
    }
    setOperand(newOperand);
    setDisplay(newOperand);
  };

  const handleOperatorClick = (op) => {
    if (operand !== "") {
      setFirstOperand(operand);
      setOperator(op);
      setOperand("");
      setDisplay(op);
    }
  };

  const handleClearClick = () => {
    setOperand("");
    setOperator("");
    setFirstOperand("");
    setDisplay("0");
  };

  const handleEqualsClick = () => {
    if (firstOperand !== "" && operator !== "" && operand !== "") {
      let result = 0;
      const a = parseFloat(firstOperand);
      const b = parseFloat(operand);

      if (operator === "+") result = a + b;
      else if (operator === "-") result = a - b;
      else if (operator === "*") result = a * b;
      else if (operator === "/") {
        if (b === 0) {
          setDisplay("Error");
          setOperand("");
          setOperator("");
          setFirstOperand("");
          return;
        }
        result = a / b;
      }

      setDisplay(result.toString());
      setOperand(result.toString());
      setOperator("");
      setFirstOperand("");
    }
  };

  const handleAlejosClick = () => {
    setDisplay("Theeanna Jether Alejos");
  };

  return (
    <div className="container">
      <h1 className="header">Calculator of Theeanna Jether Alejos - IT3A</h1>

      <div className="calculator">
        <Display value={display} />
        <div className="buttons">
          <Button label="7" onClick={() => handleNumberClick("7")} />
          <Button label="8" onClick={() => handleNumberClick("8")} />
          <Button label="9" onClick={() => handleNumberClick("9")} />
          <Button label="÷" className="operator" onClick={() => handleOperatorClick("/")} />

          <Button label="4" onClick={() => handleNumberClick("4")} />
          <Button label="5" onClick={() => handleNumberClick("5")} />
          <Button label="6" onClick={() => handleNumberClick("6")} />
          <Button label="*" className="operator" onClick={() => handleOperatorClick("*")} />

          <Button label="1" onClick={() => handleNumberClick("1")} />
          <Button label="2" onClick={() => handleNumberClick("2")} />
          <Button label="3" onClick={() => handleNumberClick("3")} />
          <Button label="-" className="operator" onClick={() => handleOperatorClick("-")} />

          <Button label="C" className="clear" onClick={handleClearClick} />
          <Button label="0" onClick={() => handleNumberClick("0")} />
          <Button label="=" className="equal" onClick={handleEqualsClick} />
          <Button label="+" className="operator" onClick={() => handleOperatorClick("+")} />
        </div>

        <Button label="ALEJOS" className="surname" onClick={handleAlejosClick} />
      </div>
    </div>
  );
}
