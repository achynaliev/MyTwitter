import React, { useEffect, useState } from "react";
import "./tweets.css";
import atai from "../../images/atai.jpg";

function timeSince(date) {
  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

const SingleTweet = ({ tweet }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setTimeLeft(timeSince(tweet.CreatedAtMs));
  }, []);

  return (
    <div className="tweetContainer">
      <img src={atai} className="userLogoOnTweet" alt="..."></img>
      <div className="createTweetInputContainer">
        <h6 className="tweetUsername">
          @{tweet.ownerUsername} {timeLeft} ago
        </h6>
        <h5 className="tweetText">{tweet.tweet}</h5>
      </div>
    </div>
  );
};

export default SingleTweet;
