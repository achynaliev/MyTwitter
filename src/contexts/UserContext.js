import React, { useReducer } from "react";
import axios from "axios";
import { APIusers } from "../helpers/config";
export const userContext = React.createContext();

const INIT_STATE = {
  user: null,
  failedLogin: null,
  //countryToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.payload };
    case "FAILED_LOGIN":
      return { ...state, failedLogin: action.payload };
    case "LOGOUT_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createAUser = async (username, email) => {
    let user = {
      username,
      email,
      following: [],
    };
    try {
      let res = await axios.post(APIusers);
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
    <userContext.Provider value={{ createAUser, AddToUserFollowings }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
