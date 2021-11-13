import React, { useContext } from "react";
import { tweetContext } from "../../contexts/TweetContext";

const TweetsList = () => {
  const { getTweetsForMainFeed, getTweetsForExploreFeed } =
    useContext(tweetContext);

  let following = localStorage.getItem("following");
  console.log(following);
  return <div></div>;
};

export default TweetsList;
