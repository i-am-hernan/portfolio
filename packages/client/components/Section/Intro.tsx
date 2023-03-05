import { Button, Container, Typography, Grow, Box } from "@mui/material";

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
        pt: "25vh",
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
        position: "fixed",
        mx: 0,
        px: { xs: "10%", md: "20%" },
      }}
    >
      <Grow appear={true} in={true} timeout={700}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Cutive Mono, monospace;",
            fontSize: "1.2rem",
            textDecoration: "none",
            color: "primary.dark",
          }}
        >
          Hi, my name is
        </Typography>
      </Grow>
      <Grow appear={true} in={true} timeout={1000}>
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
      </Grow>
      <Grow appear={true} in={true} timeout={1300}>
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
      </Grow>
      <Grow appear={true} in={true} timeout={1600}>
        <Box>
          <Typography
            sx={{
              color: "primary.dark",
              textDecoration: "none",
              fontSize: { xs: "0.9rem" },
              fontWeight: "light",
              py: 4,
            }}
          >
            I am a software engineer and technical consultant. I am eager to
            bridge the gap between business requirements and implementation. I
            like to learn and turnout robust code for tech companies.
          </Typography>
          <Button
            id="contact-me"
            sx={{
              color: "primary.main",
              borderColor: "primary.main",
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
        </Box>
      </Grow>
    </Container>
  );
};

export default Intro;
