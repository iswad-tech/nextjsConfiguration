import React, { useState } from "react";

import Layout from "@/components/Layout";
import { forgotPassword } from "@/actions/auth";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
    message: "",
    error: "",
    showForm: true,
  });

  const { email, message, error, showForm } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, message: "", error: "", [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, message: "", error: "" });
    forgotPassword({ email }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          message: data.message,
          email: "",
          showForm: false,
        });
      }
    });
  };

  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-success">{message}</div> : "";

  const passwordForgotForm = () => (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          onChange={handleChange("email")}
          value={email}
          placeholder="Type your email"
          required
        />
      </div>
      <div>
        <button>Send password reset link</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div>
        <h2>Forgot password</h2>
        <hr />
        {showError()}
        {showMessage()}
        {showForm && passwordForgotForm()}
      </div>
    </Layout>
  );
};

export default ForgotPassword;
