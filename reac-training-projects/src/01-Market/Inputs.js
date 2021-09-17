import React, { useState } from "react";
import { useContext, useRef } from "react";
import { myContext } from "./DataProvider";

export default function Inputs() {
  const dartar = useContext(myContext);
  const Dispatch = dartar.action;
  const state = dartar.info;
  const RefInput = useRef(null);
  const [inputValue, setInputValue] = useState("");
  
  const inputHandler = (e)=>{
    e.preventDefault();
    setInputValue(prevState => e.target.value);
  }
  return (
    <div className="inputs">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (dartar.info.group === "Null") {
            window.alert("Please select a group.");
            return state;
          }
            
          Dispatch({
            type: "addToProduct",
            value: RefInput.current.value,
            group: dartar.info.group,
          });
          setInputValue("");
        }}
      >
        <input
          className="Inputs_input"
          type="text"
          ref={RefInput}
          placeholder="Add New Products ..."
          required
          onChange={inputHandler}
          value={inputValue}
        />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}
