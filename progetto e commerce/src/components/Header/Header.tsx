import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Title from "../Title/Title";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Box sx={{ height: "auto", width: "auto", textAlign: "right" }}>
          <NotificationsNoneIcon sx={{ color: "#8C898A", marginTop: "10px" }} />
          <Title text={`Catch`} size={"2.2rem"} weight={"bold"} />
          <Title text={`the moment`} size={"2.2rem"} weight={"bold"} />
        </Box>
      </Container>
    </div>
  );
}
