import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { mycontext } from "./DataProvidor";

export function Search() {
  const context = useContext(mycontext);
  const dispatch = context.action;
  const [value, setValue] = useState("");
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const changeHandler = (e) => {
   // console.log(e.target.value);
   dispatch({ type: "search", value: e.target.value });
   setValue(e.target.value);
 };
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Search your favorite drink</label>
        <input
          type="text"
          name="name"
          ref={searchValue}
          onChange={changeHandler}
          value={value}
        />
      </form>
    </div>
  );
}
