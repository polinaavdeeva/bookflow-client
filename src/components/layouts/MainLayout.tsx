import { Outlet } from "react-router-dom";
import React, { FC } from "react";

import Menu from "../NavMenu/Menu";
import { Layout } from "@consta/uikit/Layout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface IMainLayoutProps {
  onClick: () => void;
  loggedOut: () => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
  setAdmin: () => void;
}

const MainLayout: FC<IMainLayoutProps> = ({
  onClick,
  loggedOut,
  isLoggedIn,
  isAdmin,
  setAdmin,
}) => {
  return (
    <Layout style={{ display: "flex", background: "#F7EFE5", height: "100%" }}>
      <Menu
        onClick={onClick}
        loggedOut={loggedOut}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        setAdmin={setAdmin}
      />
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
        <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        <div style={{ height: "100%", marginTop: 60 }}>
          <Outlet />
          <Footer />
        </div>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
