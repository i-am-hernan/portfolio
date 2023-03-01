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
        bgcolor: "primary.light",
        transition: "background-color 0.5s linear",
        height: "100vh",
        py: "25vh",
        zIndex: "3px",
        top: 0,
        left: 0,
        right: 0,
        position: "fixed",
        mx: 0,
        px: { xs: "10%", md: "20%" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Cutive Mono, monospace;",
          fontSize: "1.2rem",
          textDecoration: "none",
          color: "secondary.dark",
        }}
      >
        Hi, my name is
      </Typography>
      <Typography
        sx={{
          color: "primary.main",
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
          color: "secondary.main",
          textDecoration: "none",
          fontSize: { xs: "1.5rem", md: "3rem" },
          fontWeight: "light",
        }}
      >
        I bridge technical gaps.
      </Typography>
      <Typography
        sx={{
          color: "primary.dark",
          textDecoration: "none",
          fontSize: { xs: "0.9rem" },
          fontWeight: "light",
          py: 4,
        }}
      >
        I am a software engineer and technical consultant. I am eager to bridge
        the gap between business requirements and implementation. I like to
        learn and turnout robust code for tech companies.
      </Typography>
      <Button
        sx={{
          color: "secondary.main",
          borderColor: "secondary.main",
          px: 2,
          ":hover": {
            backgroundColor: "secondary.main",
            color: "primary.light",
            borderColor: "secondary.main",
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
