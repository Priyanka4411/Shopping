import React from 'react'
import "./CartCard.css"

export const CartCard = (props) => {
  return (
    <div className='cartCard'>
      <img src={props.img2} alt="img" />
        <p className='productName'>{props.name2}</p>
          <p className='productPrice'>${props.price2}</p>
          <button>Add To Cart</button>
    </div>
  )
}

