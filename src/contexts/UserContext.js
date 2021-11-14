import React, { useReducer } from "react";
import axios from "axios";
import { APIusers } from "../helpers/config";
export const userContext = React.createContext();

const INIT_STATE = {
  user: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createAUser = async (email, username, uid) => {
    let user = {
      username,
      email,
      uid,
      following: [username],
    };
    try {
      await axios.post(APIusers, user);
    } catch (e) {
      console.log(e);
    }
  };

  const getAUser = async (uid) => {
    try {
      let result = await axios(APIusers + "?uid=" + uid);
      console.log(result.data);
      dispatch({
        type: "SET_USER",
        payload: result.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const AddToUserFollowings = async (userId, following) => {
    try {
      let tempAPI = APIusers + userId;
      await axios.patch(tempAPI, following);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <userContext.Provider
      value={{
        createAUser,
        AddToUserFollowings,
        getAUser,
        username: state.user,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
