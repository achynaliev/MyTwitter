import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CreateATweet from "../tweets/CreateATweet";
import TweetsList from "../tweets/TweetsList";
import { useLocation } from "react-router";
import "./mainPage.css";

const MainFeed = () => {
  let location = useLocation();
  let headerText;
  if (location.pathname === "/explore") {
    headerText = "explore";
  } else {
    headerText = "home";
  }

  return (
    <div className="mainFeedContainer">
      <div className="homeHeader">
        <h1>{headerText}</h1>
        <AutoAwesomeIcon
          className="feedTopIcon"
          style={{ color: "white" }}
          sx={{ fontSize: 38 }}
        />
      </div>
      <CreateATweet />
      <TweetsList />
    </div>
  );
};

export default MainFeed;
