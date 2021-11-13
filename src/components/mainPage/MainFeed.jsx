import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CreateATweet from "../tweets/CreateATweet";
import "./mainPage.css";

const MainFeed = () => {
  return (
    <div className="mainFeedContainer">
      <div className="homeHeader">
        <h1>Home</h1>
        <AutoAwesomeIcon style={{ color: "white" }} />
      </div>
      <CreateATweet />
    </div>
  );
};

export default MainFeed;
