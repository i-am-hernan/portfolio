import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../theme";

export const Layout = ({ children }) => {
  const [secondSection, setSecondSection] = useState(false);
  const { theme } = useSelector((state) => state.session);
  let portfolioTheme = (theme === "dark") ? createTheme(darkTheme) : createTheme(lightTheme);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      handleScroll(e);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = (e) => {
    if (window.pageYOffset > window.innerHeight - 65) {
      setSecondSection(true);
    } else {
      setSecondSection(false);
    }
  };

  return (
    <ThemeProvider theme={portfolioTheme}>
      <Container disableGutters maxWidth={false}>
        <Header viewPortPage={secondSection} />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
