import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Mail, Notifications } from "@mui/icons-material";
import vivek from "../img/1696155233128.jpeg";
import ToggleButton from "./ToggleButton";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

function Navbar({setMode , mode}) {
    const [open , setOpen ] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
        Insta Quill
        </Typography>
        <InstagramIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <ToggleButton  setMode={setMode}  mode={mode}/>

        <Icons>
          <Badge badgeContent={4}  color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2}  color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src={vivek} onClick={e=>setOpen(true)} />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src={vivek} />
          <Typography>Jhon</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
            vertical:"top",
            horizontal: "right"
        }}
        transformOrigin={{
            vertical: "top" ,
            horizontal: "right"
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
