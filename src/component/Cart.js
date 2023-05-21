

import '../App.js'
import '../App.css';
import vegImg from '../img/veg-icon.png';

import React, { Component, useState } from 'react';
// import Product  from './Product.js';

function Cart(props) {
   const [quentity,setQuentity]=useState(1)
   const [currPrice,setCurrPrice]=useState(props.CartPrice);
   const [updatedPrice]=useState(props.CartPrice)
   
const plus=()=>{
   setQuentity(quentity+1);
   setCurrPrice(currPrice+updatedPrice)
}
const minus=()=>{
   if(quentity>1){
      setQuentity(quentity-1);
      setCurrPrice(currPrice-updatedPrice)
   }
   else{
      alert("sorry")
   }
  
}

  return (
  
 
 <div className='d-flex justify-content-around gap-2'>
   
<div ><img src={vegImg} alt="" className=""/></div>
<div className=''>
<h5 className='text-black mb-0'>{props.cartTitle}</h5>
<p className='mb-0'>{props.cartDescription}</p>
<div className='d-flex justify-content-between'>
<p className='mb-0 font-weight-500'>  price : {currPrice}</p>
   <div className='cart-btn d-flex gap-2'>
<div className='cart-minus'>
<button onClick={minus}>-</button>
</div>
<p className='mb-0'>
{quentity}
</p>
<div className='cart-plus'>
<button onClick={plus}>+</button>

</div>
   </div>
   </div>
</div>

   
 </div>

  );
}

export default Cart;




