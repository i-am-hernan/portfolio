import { default as MenuIcon } from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  CardMedia,
  Paper,
} from "@mui/material";
import { useState } from "react";

const pages = ["about", "experience", "work", "contact"];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ boxShadow: "0" }}>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          display: "flex",
          px: 6,
          bgcolor: "#FAF9F9",
          py: 1
        }}
      >
        <Paper sx={{ border: 2, borderColor: "#01BAEF", borderRadius: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              bgcolor: "#01BAEF",
              pr: 0.5,
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
              onClick={handleCloseNavMenu}
              sx={{ color: "#011627", display: "inline-block", px: 1 }}
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
            sx={{ color: "#E07A5F", borderColor: "#E07A5F", mx: 1 }}
            size="small"
            variant="outlined"
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
