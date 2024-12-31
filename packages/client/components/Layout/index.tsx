import { Container, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { darkTheme, lightTheme } from "../theme";

export const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const { theme } = useSelector((state: { session: { theme: string } }) => state.session);
  let portfolioTheme =
    theme === "dark" ? createTheme(darkTheme) : createTheme(lightTheme);

  return (
    <ThemeProvider theme={portfolioTheme}>
      <Container disableGutters maxWidth={false}>
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
