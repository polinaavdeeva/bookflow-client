import React, { FC } from "react";
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MyBooksPage from "../pages/MyBooksPage/MyBooksPage";

const App: FC = (): React.ReactElement => {
  return (
    <Theme preset={presetGpnDefault}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage/>} />
          <Route path="mybooks" element={<MyBooksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Theme>
  );
};

export default App;
