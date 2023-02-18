import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  const [secondSection, setSecondSection] = useState(false);

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
    <Container disableGutters maxWidth={false}>
      <Header viewPortPage={secondSection} />
      {children}
      <Footer />
    </Container>
  );
};
