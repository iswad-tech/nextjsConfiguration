import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";

import { preSignup } from "@/actions/auth";
import { isAuth } from "@/helpers/auth";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    preSignup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false,
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () => (loading ? <div>Loading...</div> : "");
  const showError = () => (error ? <div>{error}</div> : "");
  const showMessage = () => (message ? <div>{message}</div> : "");

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            onChange={handleChange("name")}
            type="text"
            placeholder="Type your name"
          />
        </div>

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
          <button>Signup</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signupForm()}
      <br />
      <Link href="/auth/password/forgot">
        <a>Forgot password</a>
      </Link>
    </React.Fragment>
  );
};

export default SignupComponent;
