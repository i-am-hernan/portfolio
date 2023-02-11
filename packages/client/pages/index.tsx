import { Button, Container, Typography } from "@mui/material";

const Home: any = () => {
  return (
    <Container
      maxWidth={false}
      component="section"
      sx={{ bgcolor: "#FAF9F9", height: "100vh", py: "25%", width: "60%" }}
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
          fontSize: "4rem",
          fontFamily: "Yomogi, cursive",
        }}
      >
        Hernán Chalco.
      </Typography>
      <Typography
        sx={{
          color: "#E07A5F",
          textDecoration: "none",
          fontSize: "4rem",
          fontFamily: "Yomogi, cursive",
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
          pr: 40,
        }}
      >
        I am a software engineer and technical consultant. Eager to bridge the
        gap between business requirements and implementation. I look to
        simultaneously learn and turnout robust code for ambitious tech
        companies.
      </Typography>
      <Button
        sx={{ color: "#E07A5F", borderColor: "#E07A5F", mt: 3, px: 2 }}
        variant="outlined"
      >
        Say hello!
      </Button>
    </Container>
  );
};

export default Home;
