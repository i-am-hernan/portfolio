import { Button, Container, Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Intro: any = () => {
  const handleChange = (e) => {
    e.preventDefault();
    window.open("mailto:hschalco@gmail.com?subject=Hello!");
  };
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="section"
      sx={{
        bgcolor: "#FFFFFF",
        height: "100vh",
        py: { xs: "30%", md: "20%" },
        zIndex: "3px",
        top: 0,
        left: 0,
        right: 0,
        position: "fixed",
        mx: 0,
        px: "20%",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Cutive Mono, monospace;",
          fontSize: "1.2rem",
          textDecoration: "none",
          color: "#011627",
        }}
      >
        Hi, my name is
      </Typography>
      <Typography
        sx={{
          color: "#01BAEF",
          textDecoration: "none",
          fontSize: { xs: "3rem", md: "4rem" },
          fontFamily: "Yomogi, cursive",
          letterSpacing: "-3px",
        }}
      >
        Hernán Chalco.
      </Typography>
      <Typography
        sx={{
          color: "#E07A5F",
          textDecoration: "none",
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "light",
        }}
      >
        I bridge technical gaps.
      </Typography>
      <Typography
        sx={{
          color: "#011627",
          textDecoration: "none",
          fontSize: "0.9rem",
          fontWeight: "light",
          py: 1,
        }}
      >
        I am a software engineer and technical consultant. I am eager to bridge
        the gap between business requirements and implementation. I like to
        learn and turnout robust code for tech companies.
      </Typography>
      <Button
        sx={{
          color: "#E07A5F",
          borderColor: "#E07A5F",
          mt: 3,
          px: 2,
          ":hover": {
            backgroundColor: "#E07A5F",
            color: "#FFFFFF",
            borderColor: "#E07A5F",
          },
        }}
        variant="outlined"
        onClick={handleChange}
      >
        Say hello!
      </Button>
    </Container>
  );
};

export default Intro;
