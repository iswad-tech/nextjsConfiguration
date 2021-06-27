import React, { useState } from "react";
import { withRouter } from "next/router";

import Layout from "@/components/Layout";
import { resetPassword } from "@/actions/auth";

const ResetPassword = ({ router }) => {
  const [values, setValues] = useState({
    name: "",
    newPassword: "",
    error: "",
    message: "",
    showForm: true,
  });

  const { newPassword, error, message } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword({
      newPassword,
      resetPasswordLink: router.query.id,
    }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          showForm: false,
          newPassword: "",
        });
      } else {
        setValues({
          ...values,
          message: data.message,
          showForm: false,
          newPassword: "",
          error: false,
        });
      }
    });
  };

  const passwordResetForm = () => (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="password"
          onChange={(e) =>
            setValues({ ...values, newPassword: e.target.value })
          }
          value={newPassword}
          placeholder="Type new password"
          required
        />
      </div>
      <div>
        <button>Change password</button>
      </div>
    </form>
  );

  const showError = () =>
    error ? <div>{error}</div> : "";
  const showMessage = () =>
    message ? <div>{message}</div> : "";

  return (
    <Layout>
      <div>
        <h2>Reset password</h2>
        <hr />
        {showError()}
        {showMessage()}
        {passwordResetForm()}
      </div>
    </Layout>
  );
};

export default withRouter(ResetPassword);
