import React, { useEffect, useReducer, useContext } from "react";
//import axios from "axios";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { userContext } from "./UserContext";

export const authContext = React.createContext();

const INIT_STATE = {
  user: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.payload };
    case "LOGOUT_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { createAUser } = useContext(userContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch({
          type: "LOGIN_USER",
          payload: user,
        });
        // ...
      } else {
        dispatch({
          type: "LOGOUT_USER",
          payload: null,
        });
        // User is signed out
        // ...
      }
    });
  }, []);

  const createUserWithEmailAndPasswordHandler = async (
    email,
    password,
    username
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createAUser(email, username, user.uid);
    } catch (error) {
      console.log(error);
      //setError("Error Signing up with email and password");
    }
  };

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        //sign out successfully
        dispatch({
          type: "LOGOUT_USER",
          payload: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginUserWithEmail = (email, password) => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <authContext.Provider
      value={{
        createUserWithEmailAndPasswordHandler,
        loginUserWithEmail,
        logOut,
        user: state.user,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
