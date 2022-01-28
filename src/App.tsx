import React, { useEffect, useState } from "react";
import "./styles/Index.scss";

import Header from "./shared/header/Header";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Popup from "./shared/popup/Popup";
import LoginPage from "./pages/login/LoginPage";
import { IUser } from "./api";
import Contacts from "./pages/contacts/Contacts";

function App() {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  console.log(user?.name);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handleUserAuthorized = (user: IUser) => {
    window.localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const handleLogOutClick = () => {
    setUser(undefined);
    window.localStorage.removeItem("user");
  };

  useEffect(() => {
    const userStored = window.localStorage.getItem("user");
    if (userStored) {
      setUser(JSON.parse(userStored));
    }
  }, []);

  return (
    <>
      <div className="global-container">
        <Popup
          onUserAuthorized={handleUserAuthorized}
          isOpen={isPopupOpen}
          onClose={handlePopupClose}
        />
      </div>
      <Header
        onLoginClick={handlePopupOpen}
        onLogOutClick={handleLogOutClick}
        user={user}
      />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home onLoginClick={handlePopupOpen} />} />
          <Route
            path="/login"
            element={
              <LoginPage user={user} onLogOutClick={handleLogOutClick} />
            }
          />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
