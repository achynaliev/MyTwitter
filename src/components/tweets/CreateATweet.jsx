import React from "react";
import atai from "../../images/atai.jpg";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Button } from "@mui/material";
import "./tweets.css";

const CreateATweet = () => {
  return (
    <div className="CreateTweetContainer">
      <img src={atai} className="createTweetLogo"></img>
      <div className="createTweetInputContainer">
        <input
          className="createTweetInput"
          type="text"
          placeholder="What's happening?"
        />
        <div className="lowerInputContainer">
          <div className="lowerInputLogos">
            <ImageIcon color="primary" />
            <GifIcon color="primary" />
            <EmojiEmotionsIcon color="primary" />
          </div>
          <Button variant="contained" size="small">
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateATweet;
