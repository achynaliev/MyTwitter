import React, { useState, useContext } from "react";
import { tweetContext } from "../../contexts/TweetContext";
import atai from "../../images/atai.jpg";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Button } from "@mui/material";
import { useLocation } from "react-router";
import "./tweets.css";

const CreateATweet = () => {
  const { createATweet } = useContext(tweetContext);
  const [tweetInfo, setTweet] = useState({ tweet: "", imageURL: "" });
  let location = useLocation();

  function handleTweetUpdate(e) {
    let userr = { ...tweetInfo, [e.target.name]: e.target.value };
    setTweet(userr);
  }

  let profileIMG = localStorage.getItem("profileIMG");
  let avatar;
  if (profileIMG) {
    avatar = profileIMG;
  } else {
    avatar = atai;
  }

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

  function handleTweeting() {
    if (tweetInfo.tweet.length > 0) {
      let time = new Date();
      let timeMls = Date.now();
      let uid = localStorage.getItem("uid");
      let username = localStorage.getItem("username");
      createATweet(
        tweetInfo.tweet,
        tweetInfo.imageURL,
        uid,
        username,
        time,
        timeMls,
        explore,
        following,
        profileIMG
      );
      setTweet({ tweet: "", imageURL: "" });
    } else {
      alert("please add a tweet");
    }
  }

  let tweetBtn;
  if (tweetInfo.tweet === "") {
    tweetBtn = (
      <Button
        onClick={(e) => handleTweeting(e)}
        variant="contained"
        size="small"
      >
        Tweet
      </Button>
    );
  } else {
    tweetBtn = (
      <Button
        onClick={(e) => handleTweeting(e)}
        variant="contained"
        size="small"
      >
        Tweet
      </Button>
    );
  }

  return (
    <div className="CreateTweetContainer">
      <img src={avatar} className="createTweetLogo" alt="..."></img>
      <div className="createTweetInputContainer">
        <input
          className="createTweetInput"
          name="tweet"
          type="text"
          placeholder="What's happening?"
          value={tweetInfo.tweet}
          onChange={(e) => handleTweetUpdate(e)}
        />
        <div className="lowerInputContainer">
          <div className="lowerInputLogos">
            <ImageIcon color="primary" />
            <GifIcon color="primary" />
            <EmojiEmotionsIcon color="primary" />
          </div>
          {tweetBtn}
        </div>
      </div>
    </div>
  );
};

export default CreateATweet;
