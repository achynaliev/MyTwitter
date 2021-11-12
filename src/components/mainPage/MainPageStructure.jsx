import React from "react";
import LeftSideBar from "./LeftSideBar";
import MainFeed from "./MainFeed";
import RightSideBar from "./RightSideBar";

const MainPageStructure = () => {
  return (
    <div className="main-page-structure">
      <LeftSideBar />
      <MainFeed />
      <RightSideBar />
    </div>
  );
};

export default MainPageStructure;
