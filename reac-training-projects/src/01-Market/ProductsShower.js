import React from "react";
import { myContext } from "./DataProvider";
import { useContext } from "react";


export default function ProductsShower() {
  const context = useContext(myContext);
  const data= context.info.data;
  return (
    <div className="Shower_Container">
      {data.map((Group) => {
        return (
          <div key={Group.id} className="Products_Container">
            <h1>{Group.group}</h1>
            {Group.products.map((product) => {
              return (
                <div key={product.id}>
                  <h3>{product.name}</h3>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
