import React from "react";
import { mycontext } from "./Provider";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { links } from "./data";
import { social } from "./data";

function Sidebar() {
  const Context = useContext(mycontext);
  const dispatch = Context.action;
  console.log(`links are ${links}`);

  return (
    <div className={`sidebar ${Context.info.isSidebarOpen && "show-sidebar"}`}>
      <header>Mohammad Moshirpanahi</header>
      <div className="sidebar-content">
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id} className="link">
                <a href={link.url}>
                  {link.icon}
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="social">
          {social.map((item) => {
            return (
              <div key={item.id} className="social-item">
                <a href={item.url}>{item.icon}</a>
              </div>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="close-btn"
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
