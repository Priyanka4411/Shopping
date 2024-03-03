import React from 'react';
import "./ProductCard.css";

export const ProductCard = (props) => {
  return (
    <div className='product'>
        <img src={props.img1} alt="img" />
        <p className='name'>{props.name1}</p>
        <div className="action">
          <p>${props.price1}</p>
          <button>Add To Cart</button>
        </div>
    </div>
  )
}

