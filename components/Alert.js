import React, { useEffect, useContext } from "react";

import StateContext from "@/context/StateContext";
import DispatchContext from "@/context/DispatchContext";

const Alert = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  useEffect(() => {
    if (appState.alertMessage && appState.alertMessage.length) {
      let timer = setTimeout(() => {
        appDispatch({ type: "clearAlertMessage" });
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [appState.alertMessage]);

  return (
    <div className="pos-fix pos-fix--lt row z-100 flex flex--jc--center flex--ai--center">
      {appState.alertSuccess && (
        <div className="row--12 row--sm--12 row--md--12 row--lg--12 p2 bgSuccess textWhite text-center flex flex--jc--center flex--ai--center box-vh-oneFourth f-b alert">
          {appState.alertMessage}
        </div>
      )}
      {!appState.alertSuccess && (
        <div className="row--12 row--sm--12 row--md--12 row--lg--12 p2 bgWarning textWhite text-center flex flex--jc--center flex--ai--center box-vh-oneFourth f-b alert">
          {appState.alertMessage}
        </div>
      )}
    </div>
  );
};

export default Alert;
