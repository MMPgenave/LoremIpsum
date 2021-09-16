import React from "react";
import mydata from "./data";
import ProductsShower from "./ProductsShower";

export default function Inputs() {
    const data = mydata;
    
  return (
    <div className="inputs">
      <form>
        <h3>cow group : </h3>
        <input type="text" placeholder="Add new Item ..." />
      </form>

      <form>
        <h3>Fruits group : </h3>
        <input type="text" placeholder="Add new Item ..." />
      </form>

      <form>
        <h3>Digital group : </h3>
        <input type="text" placeholder="Add new Item ..." />
      </form>
      <ProductsShower value={data} />
      
    </div>
  );
}
