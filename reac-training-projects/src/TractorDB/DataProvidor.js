import React from "react";
import { useReducer, useEffect } from "react";
export const mycontext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const reducer = (state, action) => {
  switch (action.type) {
    case "Loading": {
      const newState = { ...state };
      newState.isLoading = action.value;
      return newState;
    }
    case "DataFetching": {
      const newState = { ...state };
      newState.Data = action.value;
      return newState;
    }
  }
};
const initialState = {
  isLoading: true,
  Data: [],
};
export function DataProvidor(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Data Fetching function
  const fetchData = async () => {
    dispatch({ type: "Loading", value: true });
    try {
      const response = await fetch(url);
      const Data = await response.json();
      dispatch({ type: "Loading", value: false });
      dispatch({ type: "DataFetching", value: Data.drinks });
    } catch (error) {
      dispatch({ type: "Loading", value: false });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <mycontext.Provider value={{ info: state, action: dispatch }}>
      {props.children}
    </mycontext.Provider>
  );
}
