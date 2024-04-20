import { Outlet } from "react-router-dom";
import React, { FC } from "react";
import Menu from "../NavMenu/Menu";
import { Layout } from "@consta/uikit/Layout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface IMainLayoutProps {
  onClick: () => void;
}

const MainLayout: FC<IMainLayoutProps> = ({ onClick }) => {
  return (
    <Layout
      style={{
        display: "flex",
        background: "#F7EFE5",
        height: "100%vh",
        width: "98.5vw",
        padding: 0,
      }}
    >
      <div>
        <Menu onClick={onClick} />
        <Header />
      </div>
      <div style={{ marginLeft: 237, marginTop: 60 }}>
        <Outlet />
        <Footer />
      </div>
    </Layout>
  );
};

export default MainLayout;
