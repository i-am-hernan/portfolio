import Brightness2Icon from "@mui/icons-material/Brightness2";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionActions } from "../../app";

export const Footer = () => {
  const { theme } = useSelector((state) => state.session);
  const { updateSession } = sessionActions;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    window.open("mailto:hschalco@gmail.com?subject=Hello!");
  };

  const handleThemeChange = () => {
    if (theme === "light") {
      dispatch(updateSession({ theme: "dark" }));
    } else {
      dispatch(updateSession({ theme: "light" }));
    }
  };

  return (
    <Box
      sx={{
        py: 0,
        position: "fixed",
        right: 0,
        bottom: 0,
        px: 2,
        color: "secondary.main",
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
          fontSize: { xs: ".8rem", md: "1rem" },
          textDecoration: "none",
          py: 2,
          fontWeight: "bold",
          ":hover": {
            color: "primary.main",
          },
        }}
        onClick={handleChange}
      >
        hschalco@gmail.com
      </Typography>
      <Link
        href="https://github.com/objStevo"
        sx={{
          color: "secondary.main",
          ":hover": {
            color: "primary.main",
          },
        }}
      >
        <GitHubIcon sx={{ pb: 1, fontSize: { xs: "1rem", md: "2rem" } }} />
      </Link>
      <Link
        href="https://linkedin.com/in/hernanchalco"
        sx={{
          color: "secondary.main",
          ":hover": {
            color: "primary.main",
          },
        }}
      >
        <LinkedInIcon sx={{ pb: 1, fontSize: { xs: "1rem", md: "2rem" } }} />
      </Link>
      <Box
        onClick={handleThemeChange}
        sx={{
          color: "secondary.main",
          cursor: "pointer",
          ":hover": {
            color: "primary.main",
          },
        }}
      >
        {theme === "light" ? (
          <Brightness2Icon
            sx={{ pb: 1, fontSize: { xs: "1rem", md: "2rem" } }}
          />
        ) : (
          <Brightness4Icon
            sx={{ pb: 1, fontSize: { xs: "1rem", md: "2rem" } }}
          />
        )}
      </Box>
      <Container>
        <Box
          sx={{
            border: 1,
            height: { xs: "30px", md: "90px" },
            width: "1px",
            bgcolor: "secondary.main",
          }}
        ></Box>
      </Container>
    </Box>
  );
};
