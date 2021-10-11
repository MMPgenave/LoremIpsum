import React from "react";
import { FaTimes } from "react-icons/fa";
import { mycontext } from "./Provider";
import { useContext } from "react";

function Modal() {
  const Context = useContext(mycontext);
  const dispatch = Context.action;

  return (
    <div
      className={`modal-overlay ${Context.info.isModalOpen && "show-modal"}`}
    >
      <div className="modal-content">
        Modal Content
        <button
          className="close-modal-btn"
          onClick={() => {
            dispatch({ type: "modal" });
          }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
