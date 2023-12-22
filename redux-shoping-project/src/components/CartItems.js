import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartitems = useSelector((state)=>state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartitems.map((item)=>(<li>
          <CartItem quantity= {item.quantity} id={item.id} total={item.totalPrice} name={item.name} price={item.price}></CartItem>
        </li>))}
        
      </ul>
    </div>
  );
};

export default CartItems;
