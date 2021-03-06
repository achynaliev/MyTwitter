import axios from "axios";
import React, { useReducer } from "react";
import { APIcomments } from "../helpers/config";

export const commentContext = React.createContext();
const INIT_STATE = {
  comment: null,
  comments: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CREATE_A_COMMENT":
      return { ...state, comment: action.payload };
    case "GET_ALL_COMMENTS":
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

const CommentContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createAComment = async (
    username,
    tweetId,
    userImgURL,
    comment,
    userID,
    time,
    timeMls
  ) => {
    try {
      await axios.post(APIcomments, {
        username,
        tweetId,
        userImgURL,
        comment,
        userID,
        time,
        timeMls,
      });
      getAllComments(tweetId);
    } catch (e) {
      console.log(e);
    }
  };

  const getAllComments = async (tweetId) => {
    try {
      const response = await axios(APIcomments + "?tweetId=" + tweetId);
      let action = {
        type: "GET_ALL_COMMENTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <commentContext.Provider
      value={{
        createAComment,
        getAllComments,
        comment: state.comment,
        comments: state.comments,
      }}
    >
      {props.children}
    </commentContext.Provider>
  );
};

export default CommentContextProvider;
