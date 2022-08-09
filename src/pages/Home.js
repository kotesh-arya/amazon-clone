import React from "react";
import { Header } from "./Header/Header";
import { Product } from "../pages/Product/Product";
import HomeCSS from "../pages/Home.module.css";
function Home() {
  return (
    <div>
      <Header />
      <div className={HomeCSS.home}>
        <img
          className={HomeCSS.home__bannerImage}
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />
        <div className={HomeCSS.home__row}>
          <Product
            id="123456"
            title="Think like a monk"
            price={11.67}
            rating={5}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574590011l/48924781._SY475_.jpg"
          />
          <Product
            id="123457"
            title="International Version – Kindle Paperwhite Signature Edition (32 GB) – With a 6.8- display."
            price={25.67}
            rating={4}
            image="https://m.media-amazon.com/images/I/51N5CsWCIBL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className={HomeCSS.home__row}>
          <Product
            id="123456"
            title="Geek Chef Espresso Machine Coffe maker"
            price={119}
            rating={3}
            image="https://m.media-amazon.com/images/I/61cH5ZH+l4L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="123457"
            title="Tinwoo Smart Watch for Android / iOS"
            price={54}
            rating={5}
            image="https://m.media-amazon.com/images/I/61kCy73LaJL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"
          />
          <Product
            id="123458"
            title="Heart beat gamer Hoodie"
            price={32}
            rating={3}
            image="https://m.media-amazon.com/images/I/616PbyOB4dL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className={HomeCSS.home__row}>
          <Product
            id="123456"
            title="Hisense A6 series 65-inch 4K UHD Smart TV"
            price={499}
            rating={5}
            image="https://m.media-amazon.com/images/I/81MclOJOe7L._AC_SX451_SY423_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export { Home };
