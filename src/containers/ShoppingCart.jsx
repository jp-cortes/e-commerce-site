import React, { useContext, useState } from "react";
import AppContext from "@context/AppContext";
import ArrowIcon from '@icons/flechita.png';
import ShoppingCartItem from "@components/ShoppingCartItem";
import '@styles/ShoppingCart.scss';

const ShoppingCart = ({ toggleOrders,setToggleOrders }) => {

const { state } = useContext(AppContext);
const sumTotal = () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
  const sum = state.cart.reduce(reducer, 0);
  return sum;
}

    return (
      <>
        <aside className={"product-detail-shopping-cart"}>
          <div className="title-shop-container">
            <img onClick={() => setToggleOrders(!toggleOrders)}
            className={"arrow"}
            src={ArrowIcon} 
            alt="arrow" />
            <p className="shopping-cart-title">My order</p>
          </div>

          <div className="shopping-cart-my-order-content">
            <div className="shopping-cart-product-container">

            {state.cart.map( (product, index) => (
              <ShoppingCartItem product={product} key={`orderItem-${index}`} indexValue={index}/> 
            
            ))}
            </div>


            <div className="my-shopping-cart-total-order">
              <p>
                <span>Total</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
            <button className="checkout-button">Checkout</button>
          </div>
        </aside>
      </>
    );
}

export default ShoppingCart;