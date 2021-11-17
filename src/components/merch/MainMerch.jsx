import React from "react";
import LeftSideBar from "../mainPage/LeftSideBar";
import MerchRightSide from "./MerchRightSide";
import "./merch.css";

const MainMerch = () => {
  return (
    <div className="merchPage">
      <LeftSideBar />
      <MerchRightSide />
    </div>
  );
};

export default MainMerch;
