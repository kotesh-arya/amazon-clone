import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginCSS from "../Login/Login.module.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
function Login() {
  // console.log(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    console.log(email, password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //logged in, show home page
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // create user, logged in , show homepage
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className={LoginCSS.login}>
      <Link to="/">
        <img
          className={LoginCSS.login__logo}
          src="https://s3.amazonaws.com/media-p.slid.es/uploads/1081580/images/6292308/Amazon_logo.png"
          alt=""
        />
      </Link>
      <div className={LoginCSS.login__container}>
        <h2>Signin</h2>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <button
            onClick={login}
            type="submit"
            className={LoginCSS.signin__button}
          >
            Sign in
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eaque
          vel praesentium quaerat nesciunt vitae quod libero esse accusamus
          quasi.
        </p>
        <button onClick={register} className={LoginCSS.register__button}>
          Create an Account
        </button>
      </div>
    </div>
  );
}

export { Login };
