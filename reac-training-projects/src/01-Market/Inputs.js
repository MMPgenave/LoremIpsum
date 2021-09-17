import React, { useState } from "react";
import { useContext, useRef } from "react";
import { myContext } from "./DataProvider";

export default function Inputs() {
  const dartar = useContext(myContext);
  const Dispatch = dartar.action;
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
          Dispatch({
            type: "addToProduct",
            value: RefInput.current.value,
            group: dartar.info.group,
          });
              setInputValue("");

        }}
      >
        
        <input
          type="text"
          ref={RefInput}
          placeholder="Add new Item ..."
          required
          onChange={inputHandler}
          value={inputValue}
        />
        <button type="submit">Add</button>
      </form>

     {/*  <ProductsShower value={dartar.info} /> */}
    </div>
  );
}
