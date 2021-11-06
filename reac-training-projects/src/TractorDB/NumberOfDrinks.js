import React from 'react';
import { useContext } from "react";
import { mycontext } from "./DataProvidor";


export function NumberOfDrinks() {
    const context = useContext(mycontext);
    const NumberofDrink = context.info.NumberofDrink;
    
    return (
        <div className="NumberOfDrinks">
            Total Drinks:{NumberofDrink}
        </div>
    )
}

