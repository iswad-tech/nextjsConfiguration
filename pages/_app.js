import React, { useEffect } from "react";
import { useImmerReducer } from "use-immer";

import StateContext from "@/context/StateContext";
import DispatchContext from "@/context/DispatchContext";
import { setLocalStorage } from "@/helpers/functions";
import "@/styles/styles.scss";

const MyApp = ({ Component, pageProps }) => {
  const initialState = {
    isLoading: false,
    loadingMessage: "",
    alertMessage: "",
    alertSuccess: true,
  };

  const appReducer = (draft, action) => {
    switch (action.type) {
      case "loadingOn":
        draft.isLoading = true;
        break;

      case "loadingOff":
        draft.isLoading = false;
        break;

      case "setLoadingMessage":
        draft.loadingMessage = action.loadingMessage;
        break;

      case "clearLoadingMessage":
        draft.loadingMessage = "";
        break;

      case "setAlertMessage":
        draft.alertMessage = action.alertMessage;
        draft.alertSuccess = action.alertSuccess;
        break;

      case "clearAlertMessage":
        draft.alertMessage = "";
        draft.alertSuccess = true;
        break;
    }
  };

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Component {...pageProps} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default MyApp;
