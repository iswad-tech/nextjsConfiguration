import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

import Seo from "@/components/Seo";

import { signout } from "@/actions/auth";
import { isAuth } from "@/helpers/auth";
import StateContext from "@/context/StateContext";
import DispatchContext from "@/context/DispatchContext";

const Test = ({router}) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [title, setTitle] = useState("Home");
  const [description, setDescription] = useState("Something");
  const [keywords, setKeywords] = useState("Key1, Key2, Key3");

  useEffect(() => {
    appDispatch({ type: "loadingOff" });
  }, []);

  const menuToggleHandler = () => {
    const menuList = document.querySelector("#menu-mob-list");
    const menuIcon = document.querySelector("#menu-mob-icon");
    menuList.classList.toggle("menu-mob-hr-active");
    menuIcon.classList.toggle("menu-mob-icon");
    menuIcon.classList.toggle("menu-mob-closed-icon");
  };

  return (
    <Seo title={title} keywords={keywords} description={description}>
      {appState.isLoading && <h1>Loading ...</h1>}
      <div className="w-per-100 flex flex--jc--between flex--ai--center p2 bg-red pos-rel">
        <div className="w-px-100 box-px-100 br-per-rad-50 bg-green flex flex--jc--center flex--ai--center text-white">
          LOGO
        </div>
        <ul className="flex flex--jc--start show-flex-in-md-lg">
          <li className="br-all-1 br-px-rad-10 mx1 pl1 pr1 pt2 pb2 bg-cyan hover-text-secondary hover-bg-primary mouse-hand">
            Home
          </li>
          <li className="br-all-1 br-px-rad-10 mx1 pl1 pr1 pt2 pb2 bg-cyan hover-text-secondary hover-bg-primary mouse-hand">
            About
          </li>
          <li className="br-all-1 br-px-rad-10 mx1 pl1 pr1 pt2 pb2 bg-cyan hover-text-secondary hover-bg-primary mouse-hand">
            Services
          </li>
          <li className="br-all-1 br-px-rad-10 mx1 pl1 pr1 pt2 pb2 bg-cyan hover-text-secondary hover-bg-primary mouse-hand">
            Contact
          </li>
        </ul>
        <div
          className="flex flex--jc--center flex--ai--center box-px-50 mouse-hand bg-black br-all-1 br-px-rad-10 br-color-primary br-style-dashed pt3 pb3 pl1 pr1 show-flex-in-sm-xsm"
          onClick={menuToggleHandler}
        >
          <div id="menu-mob-icon" className="menu-mob-icon"></div>
        </div>
        <div
          id="menu-mob-list"
          className="pos-abs pos-abs--rb w-per-60 bg-black p2 op-70 menu-mob-hr show-block-in-sm-xsm"
        >
          <ul className="flex flex--ai--center flex--dir--col flex--jc--center">
            <li className="w-per-100 text-center br-all-1 br-px-rad-10 my1 pl1 pr1 pt2 pb2 bg-cyan hover-text-secondary hover-bg-primary mouse-hand">
              Home
            </li>
            <li className="w-per-100 text-center br-all-1 br-px-rad-10 my1 pl1 pr1 pt2 pb2 bg-cyan hover-text-secondary hover-bg-primary mouse-hand">
              About
            </li>
            <li className="w-per-100 text-center br-all-1 br-px-rad-10 my1 pl1 pr1 pt2 pb2 bg-cyan hover-text-secondary hover-bg-primary mouse-hand">
              Services
            </li>
            <li className="w-per-100 text-center br-all-1 br-px-rad-10 my1 pl1 pr1 pt2 pb2 bg-cyan hover-text-secondary hover-bg-primary mouse-hand">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="row bg-cyan">
        <div className="row--12 row--sm--10 row--md--8 row--lg--6 bg-blue box-vh-oneThird text-red p4 text-center">
          <button
            onClick={() => signout(() => router.replace(`/signin`))}
          >Signout</button>
          {isAuth() && isAuth().role === 0 && (
            <Link href="/admin">
              <button className="btn-primary text-red">{`${isAuth().name}'s Dashboard`}</button>
            </Link>
          )}
        </div>
        <div className="row--12 row--sm--2 row--md--4 row--lg--6 bg-red box-vh-twoThird text-blue p4 text-rtl">
          Second Div
        </div>
      </div>
    </Seo>
  );
};

export default withRouter(Test);
