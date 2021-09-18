import React from "react";
import { useState, useRef } from "react";

function ExpenseAndIncome() {
  const [flag, setFlag] = useState(true);
  const [Income, setIncome] = useState(0);
  const [Expense, setExpense] = useState(0);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setFlag(!flag);
        }}
      >
        {flag ? "New Transaction" : "Cancel Operation"}
      </button>
      {flag ? null : <Form info={{Income, Expense, setIncome, setExpense}} />}
      <div className="income">income : {Income}$</div>
      <div className="Expense">Expense : {Expense}$</div>
    </div>
  );
}

export default ExpenseAndIncome;



function Form(props) {
  const NumInputRef = useRef(null);
  const DescInputRef = useRef(null);
  const [NumInputValue, setNumInputValue] = useState(null);
    const [DescInputValue, setDescInputValue] = useState(null);
    const income = props.info.Income;
    const expense = props.info.Expense;
    const setIncome = props.info.setIncome;
    const setExpense = props.info.setExpense;

  const FormsubmitHandler = (e) => {
      e.preventDefault();
      setIncome(prevState => NumInputRef.current.value);
  };
  return (
    <div>
      <form onSubmit={FormsubmitHandler}>
        <label htmlFor="NumInput">Amount</label>
        <input
          type="number"
          name="NumInput"
          ref={NumInputRef}
          value={NumInputValue}
          onChange={(e) => {
            setNumInputValue((prevState) => e.target.value);
          }}
          required
        />
        <button type="submit">Submit</button>
        <label htmlFor="DescInput">Description</label>
        <input
          type="text"
          name="DescInput"
          placeholder="Description"
          ref={DescInputRef}
          value={DescInputValue}
          onChange={(e) => {
            setDescInputValue((prevState) => e.target.value);
          }}
          required
        />
              <button type="submit">Submit</button>
      </form>
    </div>
  );
}
