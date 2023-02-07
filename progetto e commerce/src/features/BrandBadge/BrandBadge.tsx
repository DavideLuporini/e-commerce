import { Button, IconButton, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./BrandBadge.css";
import React from "react";

const BrandBadge = () => {
  return (
    <>
      <Button
        sx={{
          backgroundColor: "var(--primaryBackgroundColor)",
          px: "30px",
          borderRadius: "var(--radiusPrimaryButton)",
          display: "flex",
          alignItems: "center",
          mr: 1,
        }}
      >
        <IconButton sx={{ padding: "0px 8px 0 0" }}>
          <ShoppingBagOutlinedIcon
            sx={{ color: "var(--primaryColor)", fontSize: "16px" }}
          />
        </IconButton>
        <Typography
          sx={{
            color: "var(--primaryColor)",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          adidas
        </Typography>
      </Button>
    </>
  );
};

export default BrandBadge;
