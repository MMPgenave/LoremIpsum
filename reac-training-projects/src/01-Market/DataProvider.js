import React from "react";
import data from "./data";
import { useReducer } from "react";

    const myContext = React.createContext();


const initialState = {
  data,
};

//reducer function
const reducer = (state, action) => {

    /* switch (action) {
    case ""
} */
};//end reducer function
export default function DataProvider(props) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider value={{ info: state.data, action: dispatch }}>
      {props.children}
    </myContext.Provider>
  );
}
