import React from "react";
import { useCart } from "../../Context/cartContext";
import CheckoutCSS from "../Checkout/Checkout.module.css";
import { getSubTotal } from "../../reducer/cartReducer";
function Subtotal() {
  const {
    state: { cart },
  } = useCart();
  console.log(cart)
  console.log(getSubTotal(cart));
  return (
    <div className={CheckoutCSS.subtotal}>
      <p>
        Sub total (<strong>{cart.length}</strong> items):{" "}
        <strong>
          &#36;
          {getSubTotal(cart)}
        </strong>
      </p>
      <label htmlFor="gift">
        <input id="gift" type="checkbox" />
        This order contains a gift
      </label>

      <button>Proceed to checkout</button>
    </div>
  );
}

export { Subtotal };
