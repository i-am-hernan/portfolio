import { default as MenuIcon } from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
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
        }}
      >
        <Typography
          component="a"
          href="/"
          sx={{
            display: { xs: "none", md: "inline-block" },
            color: "#01BAEF",
            textDecoration: "none",
            fontSize: "1.3rem",
            fontFamily: "Yomogi, cursive",
          }}
        >
          Hernán
        </Typography>

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
        <Typography
          component="a"
          href="/"
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#01BAEF",
            textDecoration: "none",
            fontSize: "1.3rem",
            fontFamily: "Yomogi, cursive",
          }}
        >
          Hernán
        </Typography>
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
