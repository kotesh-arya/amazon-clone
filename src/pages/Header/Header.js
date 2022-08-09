import React from "react";
import HeaderCSS from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useCart } from "../../Context/cartContext";
import { getAuth } from "firebase/auth";
function Header() {
  const {
    state: { cart, user },
  } = useCart();
  // console.log(cart);
  const login = () => {
    if (user) {
      const auth = getAuth();
      auth.signOut();
    }
  };
  const userName = user?.email;
  const position = userName?.indexOf("@");
  const displayName = userName?.slice(0, position);
  console.log(displayName);
  return (
    <nav className={HeaderCSS.header}>
      <Link to="/">
        <img
          src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-2048x620.png"
          className={HeaderCSS.header__logo}
          alt=""
        />
      </Link>
      <div className={HeaderCSS.header__search}>
        <input type="text" className={HeaderCSS.header__searchInput} />
        <SearchIcon className={HeaderCSS.header__searchIcon} />
      </div>
      <div className={HeaderCSS.header__nav}>
        <Link className={HeaderCSS.header__link} to={!user && "/login"}>
          <div onClick={login} className={HeaderCSS.header__option}>
            <span className={HeaderCSS.header__optionLineOne}>
              Hello {user && displayName}
            </span>
            <span className={HeaderCSS.header__optionLineTwo}>
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
        <Link className={HeaderCSS.header__link} to="/login">
          <div className={HeaderCSS.header__option}>
            <span className={HeaderCSS.header__optionLineOne}>Returns</span>
            <span className={HeaderCSS.header__optionLineTwo}>& Orders</span>
          </div>
        </Link>
        <Link className={HeaderCSS.header__link} to="/login">
          <div className={HeaderCSS.header__option}>
            <span className={HeaderCSS.header__optionLineOne}>Your</span>
            <span className={HeaderCSS.header__optionLineTwo}>Prime</span>
          </div>
        </Link>
        <Link
          className={HeaderCSS.header__link}
          to={user ? "/checkout" : "/login"}
        >
          <div className={HeaderCSS.header__optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={`${HeaderCSS.header__optionLineTwo} ${HeaderCSS.header__basketCount}`}
            >
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
      {/* 3 links */}
      {/* basket icon with number */}
    </nav>
  );
}

export { Header };
