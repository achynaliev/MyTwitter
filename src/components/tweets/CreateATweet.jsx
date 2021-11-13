import React, { useState, useContext } from "react";
import { tweetContext } from "../../contexts/TweetContext";
import atai from "../../images/atai.jpg";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Button } from "@mui/material";
import "./tweets.css";

const CreateATweet = () => {
  const { createATweet } = useContext(tweetContext);
  const [tweetInfo, setTweet] = useState({ tweet: "", imageURL: "" });

  function handleTweetUpdate(e) {
    let userr = { ...tweetInfo, [e.target.name]: e.target.value };
    setTweet(userr);
  }

  function handleTweeting() {
    if (tweetInfo.tweet.length > 0) {
      let uid = localStorage.getItem("uid");
      createATweet(tweetInfo.tweet, tweetInfo.imageURL, uid);
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
      <img src={atai} className="createTweetLogo"></img>
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
