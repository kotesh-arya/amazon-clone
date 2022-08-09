import React from "react";
import { useCart } from "../../Context/cartContext";
import { Header } from "../Header/Header";
import CheckoutCSS from "../Checkout/Checkout.module.css";
import { CheckoutProduct } from "../Checkout/CheckoutProduct";
import { Subtotal } from "../Checkout/Subtotal";
function Checkout() {
  const {
    state: { cart },
  } = useCart();
  return (
    <div>
      <Header />
      <div className={CheckoutCSS.checkout}>
        {cart?.length === 0 ? (
          <h2>OH! OooH! Cart Is empty</h2>
        ) : (
          <div className={CheckoutCSS.checkout__left}>
            <h2 className={CheckoutCSS.checkout__title}>Your shopping Cart</h2>
            {cart.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
        {cart.length > 0 && (
          <div className={CheckoutCSS.checkout__right}>
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export { Checkout };
