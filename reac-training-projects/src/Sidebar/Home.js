import React from "react";
import { mycontext } from "./Provider";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import "./style.css";
function Home() {
  const Context = useContext(mycontext);
  const dispatch = Context.action;
  return (
    <div>
      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => {
          dispatch({ type: "sidebar" });
        }}
      >
        <FaBars />
      </button>
      <button
        type="button"
        className="showModal-btn"
        onClick={() => {
          dispatch({ type: "modal" });
        }}
      >
        Show Modal
      </button>
    </div>
  );
}

export default Home;
