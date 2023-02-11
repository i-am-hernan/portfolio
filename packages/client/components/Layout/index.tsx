import { Container } from "@mui/material";
import React from "react";
import { Header } from "../Header";

export const Layout = ({ children }) => {
  return (
    <Container sx={{ bgcolor: "#FAF9F9"}} maxWidth={false}>
      <Header />
      {children}
    </Container>
  );
};
