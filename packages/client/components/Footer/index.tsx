import Brightness2Icon from "@mui/icons-material/Brightness2";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Link, Typography, Grow } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionActions } from "../../app";

export const Footer = () => {
  const { theme } = useSelector((state) => state.session);
  const { updateSession } = sessionActions;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    window.open("mailto:hernan.s.chalco@gmail.com?subject=Hello!");
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
        px: { xs: 0, md: 2 },
        color: "secondary.main",
        display: { xs: "flex" },
        flexDirection: "column",
        fontSize: "2rem",
        alignItems: "center",
      }}
      direction="column"
    >
      <Grow appear={true} in={true} timeout={1900}>
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
              color: "info.secondary",
            },
            display: { xs: "none", md: "block" },
          }}
          onClick={handleChange}
        >
          hernan.s.chalco@gmail.com
        </Typography>
      </Grow>
      <Grow appear={true} in={true} timeout={1600}>
        <Link
          href="https://github.com/objStevo"
          sx={{
            color: "secondary.main",
            ":hover": {
              color: "info.secondary",
            },
          }}
        >
          <GitHubIcon sx={{ pb: { xs: 0, md: 1 }, fontSize: "2rem" }} />
        </Link>
      </Grow>
      <Grow appear={true} in={true} timeout={1300}>
        <Link
          href="https://linkedin.com/in/hernanchalco"
          sx={{
            color: "secondary.main",
            ":hover": {
              color: "info.secondary",
            },
          }}
        >
          <LinkedInIcon sx={{ pb: { xs: 0, md: 1 }, fontSize: "2rem" }} />
        </Link>
      </Grow>
      <Grow appear={true} in={true} timeout={1000}>
        <Box
          onClick={handleThemeChange}
          sx={{
            color: "secondary.main",
            cursor: "pointer",
            ":hover": {
              color: "info.secondary",
            },
          }}
        >
          {theme === "light" ? (
            <Brightness2Icon
              sx={{
                pb: { xs: 0, md: 1 },
                fontSize: "2rem",
                pb: { xs: 1, md: 0 },
              }}
            />
          ) : (
            <Brightness4Icon
              sx={{
                pb: { xs: 0, md: 1 },
                fontSize: "2rem",
                pb: { xs: 1, md: 0 },
              }}
            />
          )}
        </Box>
      </Grow>
      <Grow appear={true} in={true} timeout={700}>
        <Container>
          <Box
            sx={{
              border: 1,
              height: { xs: "30px", md: "90px" },
              width: "1px",
              bgcolor: "secondary.main",
              display: { xs: "none", md: "block" },
            }}
          ></Box>
        </Container>
      </Grow>
    </Box>
  );
};
