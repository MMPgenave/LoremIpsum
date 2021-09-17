import React from "react";
import data from "./data";
import { useReducer } from "react";

const initialState = { group: "Null", data: data };

//reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "group": {
      const newState = { ...state };
      newState.group = action.payload;
      return newState;
    }
    case "addToProduct": {
      const newState = { ...state };
      const temp = { id: new Date().getTime.toString(), name: action.value };

      //Finding the index of a element that its group properties is action.group
      let Index;
       newState.data.forEach((Group,index) => {
        if (Group.group === action.group) {
           Index=index;
          
        }
       })
      
      newState.data[Index].products.push(temp);
      return newState;
    }
    case "addGroup": {
      const newState = { ...state };
      const newGroup = {};
      newGroup.id = new Date().getTime.toString();
      newGroup.group = action.value;
      newGroup.products = [];

      newState.data.push(newGroup);

      return newState;
      
      }
  }
}; //end reducer function
export const myContext = React.createContext();

const DataProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ info: state, action: dispatch }}>
      {props.children}
    </myContext.Provider>
  );
};
export default DataProvider;
