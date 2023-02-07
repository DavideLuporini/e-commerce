import React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Home.css";

import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <Box id={"shoe-container"} sx={{ color: "white" }}>
        <Box id={"shoe-animate"} sx={{ color: "white" }}></Box>
      </Box>
      <Container
        maxWidth="sm"
        sx={{
          height: "100vh",
          position: "relative",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "68%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            textAlign={"center"}
            fontWeight={"bold"}
            color={"var(--secondaryColor)"}
          >
            Great way to lift up your style!
          </Typography>
          <Typography color={"#8A8A8A"} textAlign={"center"} fontSize={"12px"}>
            complete your style with awesome shoes and sneakers from us
          </Typography>
        </Box>
        <NavLink to="/Products">
          <Button
            sx={{
              width: "75%",
              position: "absolute",
              bottom: "60px",
              left: "50%",
              transform: "translate(-50%)",
              backgroundColor: "var(--primaryBackgroundColor)",
              color: "var(--primaryColor)",
              borderRadius: "var(--radiusPrimaryButton)",
              fontSize: "10px",
              fontWeight: "bold",
              textTransform: "none",
            }}
            variant="contained"
          >
            Get Started!
          </Button>
        </NavLink>
      </Container>
    </div>
  );
};

export default Home;
