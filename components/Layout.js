import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";

import StateContext from "@/context/StateContext";

import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";
import Alert from "./Alert";

const Layout = ({ children, header = true, footer = true }) => {
  const appState = useContext(StateContext);

  return (
    <div id="container">
      {appState.isLoading && <Loading message={appState.loadingMessage} />}
      <CSSTransition
        in={appState.alertMessage && appState.alertMessage.length}
        timeout={0}
        classNames="alertAnimation"
        unmountOnExit
      >
        <Alert />
      </CSSTransition>
      <div>
        {header && <Header />}
        {children}
      </div>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;
