import React, { useContext, useEffect, useState } from "react";
import { tweetContext } from "../../contexts/TweetContext";
import { useLocation } from "react-router";
import SingleTweet from "./SingleTweet";
import { likesContext } from "../../contexts/LikesContext";

const TweetsList = () => {
  const {
    getTweetsForMainFeed,
    getTweetsForExploreFeed,
    mainFeedTweets,
    exploreFeedTweets,
    searchResults,
  } = useContext(tweetContext);
  const { likesForAUser, getLikesForAUser } = useContext(likesContext);
  let location = useLocation();

  const [mainTweets, setMainTweets] = useState(mainFeedTweets);
  const [exploreTweets, setExploreTweets] = useState(exploreFeedTweets);
  const [searchResultsState, setSearchResultsState] = useState(searchResults);

  let username = localStorage.getItem("username");

  function getItLater() {
    username = localStorage.getItem("username");
    if (username) {
      getLikesForAUser(username);
    }
  }

  useEffect(() => {
    if (username) {
      getLikesForAUser(username);
    } else {
      setTimeout(() => getItLater(), 2325);
    }
  }, []);

  useEffect(() => null, [likesForAUser]);

  let explore;
  let following = localStorage.getItem("following");
  if (following) {
    following = JSON.parse(following);
    if (following.length >= 5) {
      explore = false;
    } else {
      explore = true;
    }
  } else {
    explore = true;
  }

  if (location.pathname === "/explore") {
    explore = true;
  }

  useEffect(
    () =>
      explore ? getTweetsForExploreFeed() : getTweetsForMainFeed(following),
    []
  );

  useEffect(() => {
    let arr = [...mainFeedTweets];
    arr.sort((a, b) => b.CreatedAtMs - a.CreatedAtMs);
    setMainTweets(arr);
  }, [mainFeedTweets]);

  useEffect(() => {
    let arr = [...searchResults];
    arr.sort((a, b) => b.CreatedAtMs - a.CreatedAtMs);
    setSearchResultsState(arr);
  }, [searchResults]);

  useEffect(() => {
    let arr = [...exploreFeedTweets];
    arr.sort((a, b) => b.CreatedAtMs - a.CreatedAtMs);
    setExploreTweets(arr);
  }, [exploreFeedTweets]);

  if (explore && exploreTweets.length > 0 && likesForAUser != null) {
    console.log(likesForAUser);
    if (searchResultsState.length > 0) {
      return (
        <div>
          {searchResultsState.map((tweet) => (
            <SingleTweet
              likesForAUser={likesForAUser}
              key={tweet.id}
              tweet={tweet}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {exploreTweets.map((tweet) => (
            <SingleTweet
              likesForAUser={likesForAUser}
              key={tweet.id}
              tweet={tweet}
            />
          ))}
        </div>
      );
    }
  } else if (mainTweets.length > 0) {
    return <div>main</div>;
  } else {
    return (
      <div style={{ fontSize: "26px", color: "white" }}>START YOUR DB.JSON</div>
    );
  }
};

export default TweetsList;
