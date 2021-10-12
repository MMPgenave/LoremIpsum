import React from 'react'
import { mycontext } from "./DataProvidor";
import { useContext } from 'react';

export function ProductShower() {
  const context = useContext(mycontext);
  const Data = context.info.Data;

  return (
    <div>
      {Data.map((Item) => {
        return <div key={Item.idDrink}>{Item.strDrink}</div>;
      })}
    </div>
  );
}


