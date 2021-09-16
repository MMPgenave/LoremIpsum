import React from 'react'
import "./style.css";
import { useState,useRef } from 'react';
import Products from './Products';


import ProductsShower from "./ProductsShower";



export default function CreateNewProduct() {
    const [data, setData] = useState([]);
    const inputRef = useRef(null);
    const submitHandler = (e) => {
        e.preventDefault();
        const newData = [...data];
        newData.push(inputRef.current.value);
        inputRef.current.value = "";
          setData((prevState) => newData);

    }
    return (
        <>
            <form className="form" onSubmit={submitHandler}>
            <label htmlFor ="input">Fruits Group : </label>
                <input ref={inputRef} name="input" type="text" required/>
            <button type="submit" >add</button>
            </form>
             <ProductsShower />
        </>
    )
}
