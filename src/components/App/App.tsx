import React, { FC, useEffect } from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import ProtectedRouteElement from "../ProtectedRouteElement/ProtectedRouteElement";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { userApi } from "../../utils/UserApi";
import { auth } from "../../utils/Auth";

import "./App.scss";
import BookPage from "../pages/BookPage/BookPage";

interface User {
  name: string;
  email: string;
  password: string;
  city: string;
  dateOfBirth: string;
  gender: string;
}

const App: FC = (): React.ReactElement => {
  const [isAddBookPopupOpen, setAddBookPopup] = React.useState(false);
  const [isDeletePopupOpen, setDeletePopup] = React.useState(false);
  const [isComplaintPopupOpen, setComplaintPopup] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  const [isFeedbackPopupOpen, setFeedbackPopup] = React.useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([userApi.getUserInfo()])
        .then(([userData]) => {
          setCurrentUser(userData);
        })
        .catch((error) => {
          console.log(`Ошибка ${error}`);
        });
    }
  }, [isLoggedIn]);

  const navigate = useNavigate();

  useEffect(() => {
    const handleTokenCheck = () => {
      if (localStorage.getItem("token")) {
        const jwt = localStorage.getItem("token") ?? "";
        console.log(jwt);
        auth
          .checkToken(jwt)
          .then((data) => {
            if (!data) {
              return;
            }
            setIsLoggedIn(true);
            setCurrentUser(data);
            navigate("/", { replace: true });
          })
          .catch(() => {
            setIsLoggedIn(false);
          });
      }
    };
    handleTokenCheck();
  }, []);

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
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
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
                <SignIn setLogin={handleLogin} setAdmin={handleLoggedAdmin} />
              }
            />
            <Route path="sign-up" element={<SignUp setLogin={handleLogin} />} />
          </Routes>
          <AddBookPopup isOpen={isAddBookPopupOpen} onClose={closeAllPopups} />
          <DeletePopup isOpen={isDeletePopupOpen} onClose={closeAllPopups} />
          <ComplaintPopup
            isOpen={isComplaintPopupOpen}
            onClose={closeAllPopups}
          />
        </>
      </Theme>
    </CurrentUserContext.Provider>
  );
};

export default App;
