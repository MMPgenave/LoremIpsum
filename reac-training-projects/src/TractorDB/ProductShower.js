import React from 'react'
import { mycontext } from "./DataProvidor";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export function ProductShower() {
  const context = useContext(mycontext);
  const Data = context.info.Data;

  return (
    <div className="section">
      <div className="Header">Cocktails</div>
      <div className="Item-continer">
        
          {Data.map((Item) => {
            return (
              <div key={Item.idDrink} className="Item">
                <img src={Item.strDrinkThumb} alt={Item.strDrink} />
                <div className="footer">
                  <h1>{Item.strDrink}</h1>
                  <h3>{Item.strGlass}</h3>
                  <h4>{Item.strAlcoholic}</h4>
                  <Link className="Link-footer" to={`/${Item.idDrink}`}>
                    <div className="Detail-Link">Details</div>
                  </Link>
                </div>
              </div>
            );
          })}
      
      </div>
    </div>
  );
}


