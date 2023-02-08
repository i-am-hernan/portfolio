import { Header } from "../Header";
import { Footer } from "../Footer";
import { Error } from "../Error";
import React from "react"

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Error />
      {children}
      <Footer />
    </React.Fragment>
  );
};
