import React from "react";

export default function ProductsShower(props) {
  return (
    <div>
      {props.value.map((Group) => {
        return (
          <div key={Group.id}>
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
