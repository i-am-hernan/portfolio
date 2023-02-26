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
      bgcolor: "#FFFFFF",
      transition: "background-color 1s",
    };
    logoStyle = {
      borderColor: "#01BAEF",
      transition: "background-color 1s",
    };
    textStyle = {
      color: "#011627",
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
          bgcolor: "#01BAEF",
          ...navStyle,
        }}
      >
        <Paper
          sx={{
            border: 2,
            borderColor: "#FAF9F9",
            borderRadius: 1,
            ...logoStyle,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              bgcolor: "#01BAEF",
              pl: 0.5,
              py: "3px",
            }}
          >
            <Box
              sx={{
                width: "7px",
                height: "7px",
                bgcolor: "#F55050",
                borderRadius: "25%",
              }}
            ></Box>
            <Box
              sx={{
                width: "7px",
                height: "7px",
                bgcolor: "#F2CD5C",
                ml: "3px",
                borderRadius: "25%",
              }}
            ></Box>
            <Box
              sx={{
                width: "7px",
                height: "7px",
                bgcolor: "#379237",
                ml: "3px",
                borderRadius: "25%",
              }}
            ></Box>
          </Box>
          <Typography
            component="a"
            href="/"
            sx={{
              display: { xs: "inline-block" },
              color: "#E07A5F",
              textDecoration: "none",
              fontSize: "1rem",
              p: 0.5,
            }}
          >
            {`<Hernán/>`}
          </Typography>
        </Paper>
        <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              href={`/#${page}`}
              sx={{
                color: "#FAF9F9",
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
              color: "#FAF9F9",
              mx: 1,
              border: 1,
              bgcolor: "#E07A5F",
              borderColor: "#E07A5F",
              ":hover": {
                borderColor: "#E07A5F",
                bgcolor: "#FAF9F9",
                color: "#E07A5F",
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
                    color: "#011627",
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

// rich black: #011627
// process cyacn: #01BAEF
// seasalt: #FAF9F9
// sienna: #E07A5F
// yellow-green: #8FC93A
