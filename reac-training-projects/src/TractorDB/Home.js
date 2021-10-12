import React from 'react'
import { ProductShower } from "./ProductShower";
import { useContext } from 'react';
import { mycontext } from './DataProvidor';
import { Loading } from './Loading';

export function Home() {
    const context = useContext(mycontext);
    const isLoading = context.info.isLoading;
    console.log(`isLoading in Home is :${isLoading}`)
    if (isLoading) {
        return(<Loading />)
    }
    return (
      <div>
        <ProductShower />
      </div>
    );
}

