import { Outlet } from "react-router-dom";
import React, { FC } from "react";

import Menu from "../NavMenu/Menu";
import { Layout } from "@consta/uikit/Layout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import FeedbackPopup from "../FeedbackPopup/FeedbackPopup";

interface IMainLayoutProps {
  onClick: () => void;
}

const MainLayout: FC<IMainLayoutProps> = ({ onClick }) => {
  return (
    <Layout style={{ display: "flex", background: "#F7EFE5", height: "100%" }}>
      <Menu onClick={onClick}/>
      <Layout
        direction="column"
        style={{
          marginLeft: "16%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Header />
        <div style={{height: "100%", marginTop: 60 }}>
          <Outlet/>
          <FeedbackPopup />
          <Footer />
        </div>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
