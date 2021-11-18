import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import UserContextProvider from "./contexts/UserContext";
import TweetContextProvider from "./contexts/TweetContext";
import MerchContextProvider from "./contexts/MerchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import MerchPage from "./pages/MerchPage";
import CartMainPage from "./components/cart/CartMainPage";
import CreditMainPage from "./components/credit/CreditMainPage";
import LikesContextProvider from "./contexts/LikesContext";
import TweetPage from "./pages/TweetPage";

const TweeterRoutes = () => {
  return (
    <UserContextProvider>
      <AuthContextProvider>
        <TweetContextProvider>
          <LikesContextProvider>
            <MerchContextProvider>
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<MainPage />} />
                  <Route exact path="/explore" element={<MainPage />} />
                  <Route exact path="/auth" element={<AuthPage />} />
                  <Route exact path="/products/:category" element={<MerchPage />} />
                  <Route exact path="/cart" element={<CartMainPage />} />
                  <Route exact path="/credit" element={<CreditMainPage />} />
                  <Route exact path="/ownerUsername" element={<TweetPage />} />
                </Routes>
              </BrowserRouter>
            </MerchContextProvider>
          </LikesContextProvider>
        </TweetContextProvider>
      </AuthContextProvider>
    </UserContextProvider>
  );
};

export default TweeterRoutes;

//<Route path="*" element={<NoMatch />} />
