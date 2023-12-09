import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
  useAutocomplete,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function Rightbar() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none" ,sm: "none" , md: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          {" "}
          {loading ? (
            <>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={40} height={40} />
            </>
          ) : (
            <>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://material-ui.com/static/images/avatar/4.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/5.jpg"
              />
            </>
          )}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            {loading ? (
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                alt=""
                title="Breakfast"
              />
            )}
          </ImageListItem>
          <ImageListItem>
            {loading ? (
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                alt=""
                title="Breakfast"
              />
            )}
          </ImageListItem>
          <ImageListItem>
            {loading ? (
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                alt=""
                title="Breakfast"
              />
            )}
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              {loading ? (
                <Skeleton variant="circular" width={40} height={40} />
              ) : (
                <Avatar
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="40%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  "Ali Connors"
                )
              }
              secondary={
                loading ? (
                  <>
                    <Skeleton animation="wave" height={10} />
                    <Skeleton animation="wave" height={10} width="80%" />{" "}
                  </>
                ) : (
                  "I'll be in your neighborhood doing errands this…"
                )
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              {loading ? (
                <Skeleton variant="circular" width={40} height={40} />
              ) : (
                <Avatar
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="40%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  "Alex Jennifer"
                )
              }
              secondary={
                loading ? (
                  <>
                    <Skeleton animation="wave" height={10} />
                    <Skeleton animation="wave" height={10} width="80%" />{" "}
                  </>
                ) : (
                  " Wish I could come, but I'm out of town this…"
                )
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
