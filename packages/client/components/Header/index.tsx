import Icon from "./Icon";
import { default as MenuIcon } from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const pages = ["about", "experience", "work", "contact"];

export const Header = ({ viewPortPage }: any) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  let navStyle = null;
  let logoStyle = null;
  let textStyle = null;
  if (viewPortPage) {
    navStyle = {
      bgcolor: "primary.light",
      transition: "background-color 1s",
    };
    logoStyle = {
      borderColor: "primary.main",
      transition: "background-color 1s",
    };
    textStyle = {
      color: "primary.dark",
      transition: "background-color 1s",
    };
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    // open pdf file
    window.open(
      "/resume.pdf",
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  return (
    <AppBar sx={{ boxShadow: "0" }}>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          display: "flex",
          px: 6,
          bgcolor: "primary.main",
          ...navStyle,
        }}
      >
        <Icon sx={logoStyle} />
        <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              href={`/#${page}`}
              sx={{
                color: "primary.light",
                display: "inline-block",
                px: 1,
                ...textStyle,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Cutive Mono, monospace;",
                  fontSize: "0.9rem",
                }}
              >
                {page}
              </Typography>
            </Button>
          ))}
          <Button
            sx={{
              color: "primary.light",
              mx: 1,
              border: 1,
              bgcolor: "secondary.main",
              borderColor: "secondary.main",
              ":hover": {
                borderColor: "secondary.main",
                bgcolor: "primary.light",
                color: "secondary.main",
              },
            }}
            size="small"
            variant="contained"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Resume
          </Button>
        </Box>
        <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
          <IconButton
            size="large"
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
                    fontFamily: "Cutive Mono, monospace;",
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
      </Toolbar>
    </AppBar>
  );
};
