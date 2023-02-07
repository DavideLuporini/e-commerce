import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "var(--primaryBackgroundColor)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            color: "var(--primaryColor)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton size="large" edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="shoppingBag"
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <ShoppingBagOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
