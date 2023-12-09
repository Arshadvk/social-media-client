import React, { useEffect, useState } from "react";
import {Favorite, FavoriteBorder, InsertComment, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Skeleton, Typography } from '@mui/material'

function Post({ userName , feed ,caption } ) {
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return (
     <Card sx={{margin: {xs :2 , sm :5 }, borderRadius : 5}} >
      <CardHeader
        avatar={ loading ?
          (<Skeleton variant="circular" width={40} height={40} />) :
          (<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>) 

        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={loading?(<Skeleton variant="text" />) : userName  
      }
        subheader={ loading ? (
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          /> ) :  "September 14, 2016"}
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : ( <CardMedia
        component="img"
        height="20%"
        image={feed}
        alt="Paella dish"
      />  )}
                           
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="add to favorites">
         <InsertComment /> 
        </IconButton>
        
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post;
