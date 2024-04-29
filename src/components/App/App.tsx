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
import DeletePopup from "../DeletePopup/DeletePopup";
import ComplaintPopup from "../ComplaintPopup/ComplaintPopup";
import ComplaintPage from "../pages/ComplaintPage/ComplaintPage";
import ResultBooks from "../ResultBooks/ResultBooks";
import StatisticPage from "../pages/StatisticPage/StatisticPage";

import FeedbackPopup from "../FeedbackPopup/FeedbackPopup";

import "./App.scss";
import BookPage from "../pages/BookPage/BookPage";

const App: FC = (): React.ReactElement => {
  const [isAddBookPopupOpen, setAddBookPopup] = React.useState(false);
  const [isDeletePopupOpen, setDeletePopup] = React.useState(false);
  const [isComplaintPopupOpen, setComplaintPopup] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isFeedbackPopupOpen, setFeedbackPopup] = React.useState(false);

  function closeAllPopups() {
    setAddBookPopup(false);
    setDeletePopup(false);
    setComplaintPopup(false);
    setFeedbackPopup(false);
  }

  function handleAddPlaceClick() {
    setAddBookPopup(true);
  }

  function handleDeletePopupClick() {
    setDeletePopup(true);
  }

  function handleComplaintPopupClick() {
    setComplaintPopup(true);
  }

  function handleFeedbackPopupClick() {
    setFeedbackPopup(true);
  }

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLoginOut() {
    setIsLoggedIn(false);
    setIsAdmin(false);
  }

  function handleLoggedAdmin(isAdmin: boolean): void {
    setIsAdmin(isAdmin);
  }

  return (
    <Theme preset={presetGpnDefault}>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout
                onClick={handleAddPlaceClick}
                loggedOut={handleLoginOut}
                isLoggedIn={isLoggedIn}
                isAdmin={isAdmin}
              />
            }
          >
            <Route index element={<MainPage isAdmin={isAdmin} />} />
            <Route
              path="mybooks"
              element={<MyBooksPage addBook={handleAddPlaceClick} />}
            />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="myprofile"
              element={
                <Profile
                  setDelete={handleDeletePopupClick}
                  addComplaint={handleComplaintPopupClick}
                  isAdmin={isAdmin}
                />
              }
            />
            <Route path="statistic" element={<StatisticPage />} />

            <Route
              path="book"
              element={
                <BookPage
                  addComplaint={handleComplaintPopupClick}
                  addFeedback={handleFeedbackPopupClick}
                  isLoggedIn={isLoggedIn}
                  isAdmin={isAdmin}
                />
              }
            />

            <Route path="result-books" element={<ResultBooks />} />
            <Route path="complaints" element={<ComplaintPage />} />
          </Route>
          <Route
            path="sign-in"
            element={
              <SignIn loggedIn={handleLogin} setAdmin={handleLoggedAdmin} />
            }
          />
          <Route path="sign-up" element={<SignUp loggedIn={handleLogin} />} />
        </Routes>
        <AddBookPopup isOpen={isAddBookPopupOpen} onClose={closeAllPopups} />
        <DeletePopup isOpen={isDeletePopupOpen} onClose={closeAllPopups} />
        <ComplaintPopup
          isOpen={isComplaintPopupOpen}
          onClose={closeAllPopups}
        />
        {/* <FeedbackPopup isOpen={isFeedbackPopupOpen} onClose={closeAllPopups} /> */}
      </>
    </Theme>
  );
};

export default App;
