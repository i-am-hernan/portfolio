import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Link, Typography } from "@mui/material";

export const Footer = () => {
  const handleChange = (e) => {
    e.preventDefault();
    window.open("mailto:hschalco@gmail.com?subject=Hello!");
  };

  return (
    <Box
      sx={{
        py: 0,
        position: "fixed",
        right: 0,
        bottom: 0,
        px: 2,
        color: "#E07A5F",
        display: "flex",
        flexDirection: "column",
        fontSize: "2rem",
        alignItems: "center",
      }}
      direction="column"
    >
      <Typography
        component="a"
        sx={{
          cursor: "pointer",
          writingMode: "vertical-lr",
          fontFamily: "Cutive Mono, monospace;",
          fontSize: "1rem",
          textDecoration: "none",
          py: 2,
          fontWeight: "bold",
          ":hover": {
            color: "#01BAEF",
          },
        }}
        onClick={handleChange}
      >
        hschalco@gmail.com
      </Typography>
      <Link
        href="https://github.com/objStevo"
        sx={{
          color: "#E07A5F",
          ":hover": {
            color: "#01BAEF",
          },
        }}
      >
        <GitHubIcon sx={{ pb: 1, fontSize: "2rem" }} />
      </Link>
      <Link
        href="https://linkedin.com/in/hernanchalco"
        sx={{
          color: "#E07A5F",
          ":hover": {
            color: "#01BAEF",
          },
        }}
      >
        <LinkedInIcon sx={{ pb: 1, fontSize: "2rem" }} />
      </Link>
      <Container>
        <Box
          sx={{
            border: 1,
            height: "100px",
            width: "1px",
            bgcolor: "#E07A5F",
          }}
        ></Box>
      </Container>
    </Box>
  );
};
