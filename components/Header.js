import React from "react";

const menuItems = ["Contact Us", "About App"];

const Header = () => {
  const menuToggleHandler = () => {
    const menuList = document.querySelector("#menu-mob-list");
    const menuIcon = document.querySelector("#menu-mob-icon");
    menuList.classList.toggle("menu-mob-hr-active");
    menuIcon.classList.toggle("menu-mob-icon");
    menuIcon.classList.toggle("menu-mob-closed-icon");
  };

  return (
    <div className="w-per-100 flex flex--jc--between flex--ai--center header p2 pos-rel">
      <div className="flex flex--jc--center flex--ai--center mouse-hand">
        <div className="box-px-100 w-px-100 br-rad-per-50"></div>
      </div>
      <ul className="flex flex--jc--start show-flex-in-md-lg">
        {menuItems.map((menu, idx) => (
          <li
            key={idx}
            className="br-all-1 br-px-rad-10 mx1 pl1 pr1 pt2 pb2 hover-text-fourth mouse-hand"
          >
            {menu}
          </li>
        ))}
      </ul>
      <div
        className="flex flex--jc--center flex--ai--center box-px-50 mouse-hand show-flex-in-sm-xsm"
        onClick={menuToggleHandler}
      >
        <div id="menu-mob-icon" className="menu-mob-icon"></div>
      </div>
      <div
        id="menu-mob-list"
        className="pos-abs pos-abs--rb w-per-60 bgSecondary p2 menu-mob-hr show-block-in-sm-xsm header"
      >
        <ul className="flex flex--ai--center flex--dir--col flex--jc--center">
          {menuItems.map((menu, idx) => (
            <li
              key={idx}
              className="w-per-100 text-center br-all-1 br-px-rad-10 my1 pl1 pr1 pt2 pb2 bgPrimary hover-text-blue hover-bg-Third mouse-hand header"
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
