import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import BrandBadge from "../BrandBadge/BrandBadge";
import "./Slider.css";

const Slider = () => {
  return (
    <Box sx={{ overflow: "scroll", height: "50px" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "no-wrap",
          minWidth: "950px",
        }}
      >
        {/* display 6 element , 7 element is "see all brands" */}
        <BrandBadge />
        <BrandBadge />
        <BrandBadge />
        <BrandBadge />
        <BrandBadge />
        <BrandBadge />
        <BrandBadge />
        <BrandBadge />
      </Box>
    </Box>
  );
};

export default Slider;
