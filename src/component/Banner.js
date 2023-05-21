

import '../App.js'
import '../App.css';
import img from '../img/DSC_1614.JPG';
import React, { Component, useState } from 'react';
import Cart from './Cart.js';
import Product from './Product.js';
import data from './Data.js';

function Banner(props) {
  const [addItem, setAddItem] = useState()

  const add = () => {
    setAddItem(addItem + 1)
  }
  const [addCart, setAddCart] = useState([])



  const addToCart = (data,index) => {
    setAddCart([...addCart,data]);
    console.log(data,index)
    
  }
  const removeItem=(cartItem)=>{
    
cartItem.map((item)=>item.id!==addCart.map((cartItem)=>cartItem.id))
// console.log(data.id,"llll")
    
   
  }
  const update ={
    removeItem
  }
 console.log("removeItem",update)

  return (
    <div className="banner">
      <>
        <section className='banner'>
          <div className="container">
            <div className='row'>
              <div className='col-12'>
              <div className='d-flex align-items-center justify-content-between py-5'>
                    <h1 > <span className='text-yellow'>WelCome</span> , {props.value} </h1>
                    <h1>{addItem}</h1>
                  </div>
              </div>
            </div>
            <div className='row complex'>
              <div className='col-xl-8 product-bg'>
                <div>
              
                  <div className='row'>
                    {
                      data.productData.map((item, index) => {
                        return (
                          <>
                            <div className='col-12 pb-3' >
                              <div className='d-flex justify-content-between align-items-center bg-white border-radius-8 p-2'>
                              <Product imgValue={item.img} price={item.price} title={item.title} description={item.description} id={item.id} />
                             <div className=''> <button onClick={() => addToCart(item,index)} className='add-btn border-radius-8 w-100 px-3'>add item</button></div>
                             </div>
                            </div>
                          </>
                        )
                      })
}
                  </div>
                </div>
              </div>
              <div className='col-xl-4'>
                {/* <Cart CartImg={img}/> */}
                <div className='bg-white position-relative  '>
                  <div className='cartBanner bg-black w-100 border-radius-8 px-4 d-flex align-items-center'>
<h4 className='text-white font-weight-700 mb-0 font-size-20'>Cart</h4>
                  </div>
                  <div className='cart-bg'>
{
  addCart.map((cartItem,cartIndex)=>{
    return(
      <>
      <div className='cart py-2 px-3 m-2 border-radius-8 border '>
       <Cart cartTitle={cartItem.title} cartDescription={cartItem.description} CartPrice={cartItem.price} />
      
 
   <div className='remove-item  px-4'>
   <button className='add-btn border-radius-8  px-3' onClick={()=>removeItem(cartItem)}>remove</button>
   </div>
   </div>
   
   
      </>
    )
  })
  
}
</div>
<div className='cartBanner payment bg-yellow w-100  justify-content-center d-flex align-items-center'>



<h4 className='text-black font-weight-700 mb-0 font-size-20'>PAY ₹{
    addCart.map((item)=>{
      return(
      item.price
      )
    }).reduce((currValue,updatedValue)=>(currValue+updatedValue),0)
  }</h4>
 
   </div>
                 
                </div>
                
              </div>
            </div>
          </div>
        </section  >




      </>
    </div>
  );
}

export default Banner;
