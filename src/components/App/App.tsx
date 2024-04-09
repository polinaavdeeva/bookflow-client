import React, { FC } from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MyBooksPage from "../pages/MyBooksPage/MyBooksPage";
import SignUp from "../../pages/SignUp/SignUp";

const App: FC = (): React.ReactElement => {
  return (
    <Theme preset={presetGpnDefault}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="mybooks" element={<MyBooksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </Theme>
  );
};

export default App;
