import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { mycontext } from "./DataProvidor";
export function SingleProductInfo() {
const context = useContext(mycontext);
const Data = context.info.Data;
    const [state, setState] = useState({});

  const {id} = useParams();
     

  useEffect(() => {
      const NewData = Data.filter((I) => {
      return I.idDrink === id; 
      });
      setState(NewData[0])
  }, []);

    return (
      <div>
        
        <h1>{state.strCategory}</h1>
      </div>
    );
}
