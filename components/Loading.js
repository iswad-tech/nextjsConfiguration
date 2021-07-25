import React from "react";
import Lottie from "react-lottie";

import * as animationData from "@/assets/animations/loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = ({ message }) => {
  return (
    <div className="pos-fix pos-fix--lt w-per-100 box-vh-full bgWhite flex flex--jc--center flex--ai--center flex--dir--col op-90 z-10">
      {message && message.length && (
        <div className="pos-abs pos-abs--center z-100 loading--message">
          {message}
        </div>
      )}
      <div>
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>
    </div>
  );
};

export default Loading;
