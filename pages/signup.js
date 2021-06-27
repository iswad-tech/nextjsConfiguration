import React from "react";

import Layout from "@/components/Layout";
import SignupComponent from "@/components/auth/SignupComponent";

const Signup = () => {
  return (
    <Layout>
      <div>
        <h2>Signup</h2>
        <div>
          <div>
            <SignupComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
