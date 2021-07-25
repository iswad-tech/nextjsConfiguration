import React from "react";

import Seo from "@/components/Seo";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout header={false} footer={false}>
      <Seo title="Home">
        <h1>Home</h1>
      </Seo>
    </Layout>
  );
};

export default Index;
