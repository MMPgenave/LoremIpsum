import React from "react";
import { useReducer } from "react";

const initialState = { isModalOpen: false, isSidebarOpen: false };

const reducer = (state, action) => {
  console.log("hello reducer");
  switch (action.type) {
    case "sidebar": {
      const newState = { ...state };
      if (newState.isSidebarOpen) {
        newState.isSidebarOpen = false;
      } else {
        newState.isSidebarOpen = true;
      }
      return newState;
      }
      case "modal": {
          const newState = { ...state };
          if (newState.isModalOpen) {
              newState.isModalOpen = false;
          } else {
              newState.isModalOpen = true;
    
          }
                return newState;

          }
  }
};
export const mycontext = React.createContext();

function DataProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <mycontext.Provider value={{ info: state, action: dispatch }}>
      {props.children}
    </mycontext.Provider>
  );
}

export default DataProvider;
