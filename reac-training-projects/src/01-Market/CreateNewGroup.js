import React, { useState } from "react";
import { useContext, useRef } from "react";
import { myContext } from "./DataProvider";


export default function CreateNewGroup() {
  const dartar = useContext(myContext);
  const Dispatch = dartar.action;
  const RefInput = useRef(null);
    const [inputValue, setInputValue] = useState("");
    
      

  return (
    <div className="CreateNewGroup">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Dispatch({
            type: "addGroup",
            value: RefInput.current.value,
          });
          setInputValue("");
        }}
      >
        <input
          className="CreateNewGroup_input"
          type="text"
          ref={RefInput}
          placeholder="Create New Group ..."
          required
          onChange={(e) => {
            e.preventDefault();
            setInputValue((prevState) => e.target.value);
          }}
          value={inputValue}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
