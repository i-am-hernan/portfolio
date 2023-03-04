import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../theme";
import { Box } from "@mui/system";

export const Layout = ({ main: Main }: any) => {
  const [viewPortPage, setviewPortPage] = useState(0);
  const { theme } = useSelector((state) => state.session);
  let portfolioTheme =
    theme === "dark" ? createTheme(darkTheme) : createTheme(lightTheme);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      handleScroll(e);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = (e) => {
    setviewPortPage(Math.floor(window.pageYOffset / (window.innerHeight - 65)));
  };
  // console.log('asdfasdf')
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Container disableGutters maxWidth={false}>
        <Header viewPortPage={viewPortPage} />
        {Main}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
