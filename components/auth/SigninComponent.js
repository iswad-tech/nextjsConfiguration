import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";

import { signin } from "@/actions/auth";
import { authenticate, isAuth } from "@/helpers/auth";

import LoginGoogle from "./LoginGoogle";

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        // save user token to cookie
        // save user info to localstorage
        // authenticate user
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div>Loading...</div> : "";
  const showError = () =>
    error ? <div>{error}</div> : "";
  const showMessage = () =>
    message ? <div>{message}</div> : "";

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            placeholder="Type your email"
          />
        </div>

        <div>
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            placeholder="Type your password"
          />
        </div>

        <div>
          <button>Signin</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      <LoginGoogle />
      {showForm && signinForm()}
      <br />
      <Link href="/auth/password/forgot">
        <a className="text-green">Forgot password</a>
      </Link>
    </React.Fragment>
  );
};

export default SigninComponent;
