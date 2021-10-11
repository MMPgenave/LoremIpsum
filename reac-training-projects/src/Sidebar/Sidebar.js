import React from "react";
import { mycontext } from "./Provider";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { links } from "./data";

function Sidebar() {
  const Context = useContext(mycontext);
  const dispatch = Context.action;
  console.log(`links are ${links}`);

  return (
    <div className={`sidebar ${Context.info.isSidebarOpen && "show-sidebar"}`}>
      <h1>Mohammad Moshirpanahi</h1>
      <div className="sidebar-content">
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id} className="link">
                <a href={link.url}>
                  {link.icon}{"-"}
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        type="button"
        className="close-modal-btn"
        onClick={() => {
          dispatch({ type: "sidebar" });
        }}
      >
        <FaTimes />
      </button>
    </div>
  );
}

export default Sidebar;
