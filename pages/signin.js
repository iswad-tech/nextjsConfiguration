import { withRouter } from "next/router";

import Layout from "@/components/Layout";
import SigninComponent from "@/components/auth/SigninComponent";

const Signin = ({ router }) => {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div>{router.query.message}</div>;
    } else {
      return;
    }
  };

  return (
    <Layout>
      <div>
        <h2>Signin</h2>

        <div>
          <div>{showRedirectMessage()}</div>
        </div>

        <div>
          <div>
            <SigninComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Signin);
