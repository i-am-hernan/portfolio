import { default as MenuIcon } from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Grow,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useViewPortPage } from "../../hooks/useViewPortPage";
import Icon from "./Icon";
import React from "react";

const pages = ["about", "experience", "work", "contact"];

export const Header = (props) => {
  const viewPortPage = useViewPortPage(0);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  let navStyle: any = null;
  let logoStyle: any = {color: "background.main",};
  let textStyle: any = null;

  if (viewPortPage) {
    navStyle = {
      bgcolor: "background.main",
      transition: "background-color 1s",
    };
    logoStyle = {
      borderColor: "foreground.main",
      transition: "background-color 1s",
      color: "foreground.main",
    };
    textStyle = {
      color: "foreground.main",
      transition: "background-color 1s",
    };
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    window.open(
      "/resume.pdf",
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  return (
    <AppBar sx={{ boxShadow: "0" }}>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          px: { xs: 2, md: 4 },
          py: 0.5,
          bgcolor: "primary.main",
          ...navStyle,
        }}
      >
        <Icon sx={logoStyle} />
        <Box
          sx={{
            justifyContent: "flex-start",
            display: { xs: "none", md: "flex" },
          }}
        >
          {pages.map((page, i) => (
            <Grow key={page} appear={true} in={true} timeout={700 + i * 300}>
              <Button
                key={page}
                href={`/#${page}`}
                sx={
                  i < pages.length - 1
                    ? {
                        color: "primary.light",
                        display: "inline-block",
                        ...textStyle,
                        px: 0,
                      }
                    : {
                        color: "background.main",
                        border: 1,
                        bgcolor: "foreground.main",
                        borderColor: "background.main",
                        ":hover": {
                          borderColor: "foreground.main",
                          bgcolor: "background.main",
                          color: "foreground.main",
                        },
                        px: 0,
                      }
                }
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: "0.85rem",
                    textTransform: "none",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {page}
                </Typography>
              </Button>
            </Grow>
          ))}
        </Box>
        <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
          <IconButton
            size="small"
            aria-label="menu options"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography
                  component="a"
                  href={`/#${page}`}
                  sx={{
                    fontFamily: "sans-serif",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    color: "secondary.dark",
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </AppBar>
  );
};
