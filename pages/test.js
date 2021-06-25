import React, { useState, useEffect, useContext } from "react";

import Seo from "@/components/Seo";

import StateContext from "@/context/StateContext";
import DispatchContext from "@/context/DispatchContext";

const Test = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [title, setTitle] = useState("Home");
  const [description, setDescription] = useState("Something");
  const [keywords, setKeywords] = useState("Key1, Key2, Key3");

  useEffect(() => {
    appDispatch({ type: "loadingOff" });
  });
  return (
    <Seo title={title} keywords={keywords} description={description}>
      {appState.isLoading && <h1>Loading ...</h1>}
      <div className="row bg-cyan">
          <div className="row--12 row--sm--10 row--md--8 row--lg--6 bg-blue box-oneThird text-red p4 text-center">First Div</div>
          <div className="row--12 row--sm--2 row--md--4 row--lg--6 bg-red box-twoThird text-blue p4 text-rtl">Second Div</div>
      </div>
    </Seo>
  );
};

export default Test;
