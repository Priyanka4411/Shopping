import React from 'react';
import {CartCard } from "../components/CartCard";
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
  useTitle("Cart");
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
  ]
  return (
    <div className='cart'>
      <h1>Card Item : {products.length}</h1>
      {products.map((item)=>{
        return(
          <>
    <CartCard key={item.id} name2={item.name} price2={item.price} img2={item.image}/> 
          </>
        )
      })}
        
    </div>
  )
}

