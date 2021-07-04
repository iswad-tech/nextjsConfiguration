import React from "react";
import Head from "next/head";
import { useImmerReducer } from "use-immer";

import StateContext from "@/context/StateContext";
import DispatchContext from "@/context/DispatchContext";

const Layout = ({ title, keywords, description, children }) => {
  const initialState = {
    isLoading: false,
  };

  const appReducer = (draft, action) => {
    switch (action.type) {
      case "loadingOn":
        draft.isLoading = true;
        break;

      case "loadingOff":
        draft.isLoading = false;
        break;
    }
  };

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  return (
    <div id="container" className="bgBlack">
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <p className="textWhite">Header</p>
          {children}
          <p className="textWhite">Footer</p>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
};

export default Layout;
