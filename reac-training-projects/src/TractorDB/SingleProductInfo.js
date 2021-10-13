import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { mycontext } from "./DataProvidor";
export function SingleProductInfo() {
  const context = useContext(mycontext);
  const Data = context.info.Data;
  const [state, setState] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const NewData = Data.filter((I) => {
      return I.idDrink === id;
    });
    setState(NewData[0]);
  }, []);
  return (
    <div className="single-product-container">
      <div className="header">{state.strDrink}</div>
      <div className="single-product-Info">
        <img src={state.strDrinkThumb} alt={state.strDrink} />
        <div className="Product-Info">
          <div className="Information">
            <h3>Name:</h3>
            <p>{state.strDrink}</p>
          </div>
          <div className="Information">
            <h3>Category:</h3>
            <p>{state.strCategory}</p>
          </div>
          <div className="Information">
            <h3>Info:</h3>
            <p>{state.strAlcoholic}</p>
          </div>
          <div className="Information">
            <h3>Glass:</h3>
            <p>{state.strGlass}</p>
          </div>
          <div className="Information">
            <h3>Instructons:</h3>
            <p>{state.strInstructions}</p>
          </div>
          <div className="Information">
            <h3>Ingredient:</h3>
            <p>{state.strIngredient1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
