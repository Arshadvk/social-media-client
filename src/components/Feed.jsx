import React from 'react'
import {  Box} from '@mui/material'
import Post from './Post'
import feed1 from '../img/feed1.jpg'
import feed2 from '../img/feed2.jpg'
import feed3 from '../img/feed3.jpg'
import feed4 from '../img/feed4.jpg'
import feed5 from '../img/feed5.jpg'
function Feed() {
  return (
    <Box flex={4}>
      <Post userName={"the fantasy"} feed={feed1} caption={"its coffee time"}/>
      <Post userName={"yongyong_leo"}  feed={feed2}/>
      <Post userName={"fuziqopc"} feed={feed3}/>
      <Post userName={"minimal.desksetups"} feed={feed4}/>
      <Post  userName={"andresvidoza"} feed={feed5}/>
    </Box>
  )
}

export default Feed
