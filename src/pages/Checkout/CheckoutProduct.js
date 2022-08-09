import React from "react";
import { useCart } from "../../Context/cartContext";
import CheckoutCSS from "../Checkout/Checkout.module.css";
function CheckoutProduct({ id, title, price, rating, image }) {
  const { dispatch } = useCart();
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  return (
    <div className={CheckoutCSS.checkoutProduct}>
      <img className={CheckoutCSS.checkoutImage} src={image} alt="" />
      <div className={CheckoutCSS.product__info}>
        <p className={CheckoutCSS.product__title}>{title}</p>
        <p className={CheckoutCSS.product__price}>
          <strong>&#36;</strong>
          <strong>{price}</strong>
        </p>
        <div className={CheckoutCSS.product__rating}>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export { CheckoutProduct };
