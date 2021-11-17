import React, { useReducer } from "react";
import axios from "axios";
import { APIlikes } from "../helpers/config";

export const likesContext = React.createContext();
const INIT_STATE = {
  likesForAUser: null,
  NumberOfLikesForATweet: [],
  like: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LIKES_FOR_A_USER":
      return {
        ...state,
        likesForAUser: action.payload,
      };
    case "LIKES_FOR_A_TWEET":
      return {
        ...state,
        NumberOfLikesForATweet: action.payload,
      };
    case "LIKE_FOR_A_TWEET":
      return {
        ...state,
        like: action.payload,
      };
    default:
      return state;
  }
};

const LikesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const LikeAtweet = async (tweetId, username) => {
    try {
      let result = await axios.post(APIlikes, { tweetId, username });
      dispatch({
        type: "LIKE_FOR_A_TWEET",
        payload: result.data,
      });
      getLikesForAUser(username);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteAlikeOnATweet = async (likeId, username) => {
    try {
      await axios.delete(APIlikes + likeId);
      getLikesForAUser(username);
    } catch (e) {
      console.log(e);
    }
  };

  const getLikesForAUser = async (username) => {
    try {
      let result = await axios.get(APIlikes + "?username=" + username);
      dispatch({
        type: "LIKES_FOR_A_USER",
        payload: result.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <likesContext.Provider
      value={{
        LikeAtweet,
        deleteAlikeOnATweet,
        getLikesForAUser,
        likesForAUser: state.likesForAUser,
        like: state.like,
      }}
    >
      {props.children}
    </likesContext.Provider>
  );
};

export default LikesContextProvider;
