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
                  <h3>{Item.strDrink}</h3>
                  <Link to={`/${Item.idDrink}`}>Learn More</Link>
                </div>
              </div>
            );
          })}
      
      </div>
    </div>
  );
}


