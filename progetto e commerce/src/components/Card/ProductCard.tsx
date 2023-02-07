import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import "./ProductCard.css";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ classGrid }: { classGrid: string }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleOnClick = () => {
    setIsClicked(!isClicked);
  };

  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <Card
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
      }}
      className={`${classGrid}`}
    >
      <Box
        sx={{
          justifyContent: "end",
          display: "flex",
          padding: "10px",
          flex: "1",
        }}
      >
        <Avatar sx={{ backgroundColor: "transparent" }}>
          <IconButton aria-label="add to favorites">
            {!isClicked ? (
              <FavoriteBorderIcon
                sx={{ color: "black" }}
                onClick={() => handleOnClick()}
              />
            ) : (
              <FavoriteIcon
                sx={{ color: "red" }}
                onClick={() => handleOnClick()}
              />
            )}
          </IconButton>
        </Avatar>
      </Box>
      {/* <CardMedia component="img" height="194" src="./sedia.jpg" /> */}

      <CardContent
        sx={{
          backgroundColor: "var(--primaryBackgroundColor)",
          border: "none",
          boxShadow: "none",
          padding: "0 0 0 0",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "space-beetwen",
            }}
          >
            <Typography
              variant="body2"
              color="black"
              fontSize={"1rem"}
              fontWeight="bold"
              textAlign={"left"}
              sx={{
                maxWidth: "100%",
                overflowWrap: "break-word",
                maxHeight: "50px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginTop: "10px",
              }}
            >
              AF1 CRATER FLYKNIT NN(GS)
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ textAlign: "left" }}
              fontSize={"0.7rem"}
              variant="body2"
              color="#A5A5A5"
              fontWeight={"bold"}
            >
              $550
            </Typography>
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
}
