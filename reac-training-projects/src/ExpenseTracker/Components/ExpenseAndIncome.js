import React from "react";
import { useState, useRef } from "react";
import "./style.css";

function ExpenseAndIncome() {
  const [flag, setFlag] = useState(true);
  const [Income, setIncome] = useState(0);
  const [Expense, setExpense] = useState(0);
  const [transaction, setTransaction] = useState([]);

  return (
    <div className="container">
      <div className="FirstSubContianer">
        <div className="balance">balance : {Income - Expense}$</div>
        <button
          type="button"
          onClick={() => {
            setFlag(!flag);
          }}
        >
          {flag ? "New Transaction" : "Cancel Operation"}
        </button>
      </div>
      {flag ? null : (
        <Form
          info={{
            Income,
            Expense,
            setIncome,
            setExpense,
            transaction,
            setTransaction,
          }}
        />
      )}
      <div className="secondContainer">
        <div className="income">
          Income <div className="Incomedoller">{Income}$</div>{" "}
        </div>
        <div className="Expense">
          Expense <div className="expenseDoller">{Expense}$</div>{" "}
        </div>
      </div>
      <h1>Transaction </h1>
      <div className="transaction">
        {transaction.map((item) => {
          return <div className="tansactionItem">{item}</div>;
        })}
      </div>
    </div>
  );
}

export default ExpenseAndIncome;

//Form component
function Form(props) {
  const initialState = { amount: 0, description: "" };
  const [state, setState] = useState(initialState);

  const income = props.info.Income;
  const expense = props.info.Expense;
  const setIncome = props.info.setIncome;
  const setExpense = props.info.setExpense;
  const transaction = props.info.transaction;
  const setTransaction = props.info.setTransaction;

  const IncomeRadioRef = useRef(null);
  const ExpenseRadioRef = useRef(null);

  const FormsubmitHandler = (e) => {
    console.log(`e.name is : ${e.target.name}`);
    e.preventDefault();
    if (IncomeRadioRef.current.checked) {
      setIncome((prevState) => Number(state.amount) + prevState);
      //Adding transaction
      transaction.push(`${state.description}:    +${state.amount}$`);
      setTransaction((prevState) => transaction);
    }

    if (ExpenseRadioRef.current.checked) {
      setExpense((prevState) => Number(state.amount) + prevState);
      transaction.push(`${state.description}:    -${state.amount}$`);
      setTransaction((prevState) => transaction);
    }
  };
  return (
    <div>
      <form onSubmit={FormsubmitHandler} className="form_container">
        <input
          type="number"
          name="NumInput"
          placeholder="Amount"
          value={state.amount}
          onChange={(e) => {
            setState((prevState) => {
              const newState = { ...prevState };
              newState.amount = e.target.value;
              return newState;
            });
          }}
          required
        />
        <input
          type="text"
          name="DescInput"
          placeholder="Description"
          value={state.description}
          onChange={(e) => {
            setState((prevState) => {
              const newState = { ...prevState };
              newState.description = e.target.value;
              return newState;
            });
          }}
          required
        />
        <div className="RadioBtns">
          <input
            type="radio"
            className="IncomeRadioBtn"
            defaultChecked
            name="type"
            ref={IncomeRadioRef}
            value="Income"
          />
          <label>Income</label>
          <input
            type="radio"
            name="type"
            ref={ExpenseRadioRef}
            value="Expense"
          />
          <label>Expense</label>
        </div>

        <button  type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
