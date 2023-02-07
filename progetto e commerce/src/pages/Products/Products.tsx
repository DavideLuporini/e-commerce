import {
  Box,
  Button,
  Card,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import TuneIcon from "@mui/icons-material/Tune";
import { Container } from "@mui/system";
import "./Products.css";
import BadgeSlider from "../../features/Slider/Slider";
import SearchText from "../../features/SearchText/SearchText";
import NavBar from "../../features/NavBar/NavBar";
import Slider from "../../features/Slider/Slider";
import ProductCard from "../../components/Card/ProductCard";

const Item = styled(Paper)(({ theme }: { theme: any }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Products = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              mb: 4,
            },
          }}
        >
          <SearchText />
          <Paper
            sx={{
              p: "4px 4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              ml: 2,
            }}
            elevation={1}
          >
            <TuneIcon sx={{ fontSize: "18px", padding: "8px" }} />
          </Paper>
        </Box>
        <Slider />

        <section id="page">
          <ProductCard classGrid="item-top-left"></ProductCard>
          <ProductCard classGrid="item-top-right"></ProductCard>
          <ProductCard classGrid="item-bottom-left"></ProductCard>
          <ProductCard classGrid="item-bottom-right"></ProductCard>
        </section>
        <section id="page">
          <ProductCard classGrid="item-top-left"></ProductCard>
          <ProductCard classGrid="item-top-right"></ProductCard>
          <ProductCard classGrid="item-bottom-left"></ProductCard>
          <ProductCard classGrid="item-bottom-right"></ProductCard>
        </section>
      </Container>
    </>
  );
};

export default Products;
