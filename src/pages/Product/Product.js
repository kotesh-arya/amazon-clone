import React from "react";
import { useCart } from "../../Context/cartContext";
import ProductCSS from "../Product/Product.module.css";
function Product({ id, title, price, rating, image }) {
  // let sample = Array(2)
  //   .fill()
  //   .map((_) => "ji");
  // console.log(sample);
  const { dispatch } = useCart();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className={ProductCSS.product}>
      <div className={ProductCSS.product__info}>
        <p>{title}</p>
        <p className={ProductCSS.product__price}>
          <strong>&#36;</strong>
          <strong>{price}</strong>
        </p>

        <div className={ProductCSS.product__rating}>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export { Product };
