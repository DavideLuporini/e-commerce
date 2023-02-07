import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Box } from "@mui/material";
import "./SearchText.css";

export default function SearchText() {
  return (
    <Box sx={{ flex: 1, marginRight: "0px" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <InputBase
          sx={{ flex: 1, paddingLeft: "5px" }}
          placeholder="Search for brand or product name"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>
    </Box>
  );
}
