import React, { FC } from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MyBooksPage from "../pages/MyBooksPage/MyBooksPage";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import AddBookPopup from "../AddBookPopup/AddBookPopup";
import "./App.scss";

const App: FC = (): React.ReactElement => {
  const [isAddBookPopupOpen, setAddBookPopup] = React.useState(false);

  function closeAllPopups() {
    setAddBookPopup(false);
  }

  function handleAddPlaceClick() {
    setAddBookPopup(true);
  }

  return (
    <Theme preset={presetGpnDefault}>
      <>
        <Routes>
          <Route
            path="/"
            element={<MainLayout onClick={handleAddPlaceClick} />}
          >
            <Route index element={<MainPage />} />
            <Route path="mybooks" element={<MyBooksPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="myprofile" element={<Profile />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
        <AddBookPopup isOpen={isAddBookPopupOpen} onClose={closeAllPopups} />
      </>
    </Theme>
  );
};

export default App;
