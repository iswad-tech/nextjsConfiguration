import React, { useState, useEffect } from "react";
import Router from "next/router";
import GoogleLogin from "react-google-login";

import { loginWithGoogle } from "@/actions/auth";
import { authenticate, isAuth } from "@/helpers/auth";
import { GOOGLE_CLIENT_ID } from "../../config";

const LoginGoogle = () => {
  const responseGoogle = (response) => {
    // console.log(response);
    const tokenId = response.tokenId;
    const user = { tokenId };

    loginWithGoogle(user).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
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

  return (
    <div className="pb3">
      <GoogleLogin
        clientId={`${GOOGLE_CLIENT_ID}`}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        theme="dark"
      />
    </div>
  );
};

export default LoginGoogle;
