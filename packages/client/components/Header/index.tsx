import {
  default as AdbIcon,
  default as MenuIcon,
} from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloudIcon from "@mui/icons-material/Cloud";

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
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          display: "flex",
          px: 10,
          bgcolor: "#FAF9F9",
        }}
      >
        <IconButton
          component="a"
          href="/"
          sx={{
            display: { xs: "none", md: "inline-block" },
            color: "#01BAEF"
          }}
        >
          <CloudIcon sx={{fontSize: "2rem"}} />
        </IconButton>

        <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ color: "#01BAEF", display: "inline-block", px: 2 }}
            >
              <Typography
                sx={{
                  fontFamily: "Cutive Mono, monospace;",
                  fontSize: "0.8rem",
                }}
              >
                {page}
              </Typography>
            </Button>
          ))}
          <Button
            sx={{ color: "#01BAEF", borderColor: "#01BAEF" }}
            size="small"
            variant="outlined"
          >
            Resume
          </Button>
        </Box>
        {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              keepMounted
              transformOrigin={{
                vertical: "top",
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
      </Toolbar>
    </AppBar>
  );
};
