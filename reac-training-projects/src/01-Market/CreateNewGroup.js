import React, { useState } from "react";
import { useContext, useRef } from "react";
import { myContext } from "./DataProvider";


export default function CreateNewGroup() {
  const dartar = useContext(myContext);
  const Dispatch = dartar.action;
  const RefInput = useRef(null);
    const [inputValue, setInputValue] = useState("");
    
      

  return (
    <div>
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
          type="text"
          ref={RefInput}
          placeholder="Add new Group ..."
          required
          onChange={(e) => {
            e.preventDefault();
            setInputValue((prevState) => e.target.value);
          }}
          value={inputValue}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
