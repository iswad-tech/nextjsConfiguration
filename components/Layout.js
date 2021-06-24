import React from "react";
import Head from "next/head";

// import Header from "@/components/Header";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
      </Head>
      {children}
      <p>Footer</p>
    </React.Fragment>
  );
};

Layout.defaultProps = {
  title: "Home | Seoblog",
  description:
    "This website has a good search engine optimization (SEO) using Nextjs",
  keywords: "seo, blog, next, react, node",
};

export default Layout;
