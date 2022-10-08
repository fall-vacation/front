import React from "react";
import Wrap from "./Wrap";
import Nav from "./Nav";
import Footer from "./Footer";

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Nav />
      <Wrap>{children}</Wrap>
      <Footer />
    </>
  );
};

export default Layout;
