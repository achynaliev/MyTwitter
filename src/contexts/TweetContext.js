import React, { useReducer } from "react";
import axios from "axios";
import { APItweets } from "../helpers/config";

export const tweetContext = React.createContext();
const INIT_STATE = {
  mainFeedTweets: [],
  exploreFeedTweets: [],
  searchResults: [],
  specific_user_tweets: [],
  specific_tweet: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "MAIN_FEED_TWEETS":
      return {
        ...state,
        mainFeedTweets: state.mainFeedTweets.concat(action.payload),
      };
    case "EXPLORE_FEED_TWEETS":
      return {
        ...state,
        exploreFeedTweets: action.payload,
      };
    case "MAIN_FEED_TWEETS_WIPE_CLEAN":
      return {
        ...state,
        mainFeedTweets: [],
      };
    case "SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
      };
    case "SPECIFIC_USER_TWEETS":
      return {
        ...state,
        specific_user_tweets: action.payload,
      };
    case "SPECIFIC_TWEET":
      return {
        ...state,
        specific_tweet: action.payload,
      };
    default:
      return state;
  }
};

const TweetContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createATweet = async (
    tweet,
    imgURL,
    uid,
    username,
    createdAt,
    CreatedAtMs,
    explore,
    following,
    ownerImgURl
  ) => {
    let tw = {
      tweet,
      imgURL,
      ownerUID: uid,
      ownerUsername: username,
      ownerImgURl,
      createdAt,
      CreatedAtMs,
    };
    try {
      await axios.post(APItweets, tw);
      if (explore) {
        getTweetsForExploreFeed();
      } else {
        getTweetsForMainFeed(following);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getTweetsForMainFeed = async (followings) => {
    dispatch({
      type: "MAIN_FEED_TWEETS_WIPE_CLEAN",
      payload: [],
    });
    followings.forEach(async (uid) => {
      try {
        let tempApi = APItweets + "?owner=" + uid;
        let result = await axios(tempApi);
        dispatch({
          type: "MAIN_FEED_TWEETS",
          payload: result.data,
        });
      } catch (e) {}
    });
  };

  const getTweetsForExploreFeed = async () => {
    try {
      let result = await axios(APItweets);
      dispatch({
        type: "EXPLORE_FEED_TWEETS",
        payload: result.data,
      });
      console.log("hz why");
    } catch (e) {
      console.log(e);
    }
  };

  const searchForTweetsAndUsers = async (searchTerm) => {
    if (searchTerm.length > 2) {
      try {
        let { data } = await axios(APItweets + "?q=" + searchTerm);
        let reg = new RegExp(searchTerm);
        let result = data.filter((twt) => {
          if ("tweet" in twt) {
            if (
              twt.tweet.toLowerCase().match(reg) ||
              twt.ownerUsername.toLowerCase().match(reg)
            ) {
              return twt.tweet;
            }
          }
        });
        console.log(result);
        dispatch({
          type: "SEARCH_RESULTS",
          payload: result,
        });
      } catch (e) {}
    } else {
      dispatch({
        type: "SEARCH_RESULTS",
        payload: [],
      });
    }
  };

  const getTweetsForSpecificUser = async (uid) => {
    try {
      let tempApi = APItweets + "?owner=" + uid;
      let result = await axios(tempApi);
      dispatch({
        type: "SPECIFIC_USER_TWEETS",
        payload: result.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateLikesCountForATweet = async (tweetId, likesCount) => {
    try {
      await axios.patch(APItweets + tweetId, { likesCount });
    } catch (e) {
      console.log(e);
    }
  };

  const getASpecificTweet = async (id) => {
    try {
      let tempApi = APItweets + id;
      let result = await axios.get(tempApi);
      dispatch({
        type: "SPECIFIC_TWEET",
        payload: result.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteATweet = async (id) => {
    try {
      let tempApi = APItweets + id;
      await axios.delete(tempApi);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <tweetContext.Provider
      value={{
        createATweet,
        getTweetsForMainFeed,
        getTweetsForExploreFeed,
        getTweetsForSpecificUser,
        deleteATweet,
        getASpecificTweet,
        searchForTweetsAndUsers,
        updateLikesCountForATweet,
        searchResults: state.searchResults,
        mainFeedTweets: state.mainFeedTweets,
        exploreFeedTweets: state.exploreFeedTweets,
        specific_tweet: state.specific_tweet,
      }}
    >
      {props.children}
    </tweetContext.Provider>
  );
};

export default TweetContextProvider;
