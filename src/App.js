import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import { Box, Container, Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import Add from './components/Add'
import ToggleButton from './components/ToggleButton'

function App() {
  const [mode ,setMode ] = useState("light")
  const darkTheme = createTheme({
    palette :{
      mode : mode
    }
  })
  return (
      <ThemeProvider theme={darkTheme}>

      <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar setMode={setMode}  mode={mode}/>
      <Stack direction='row' spacing={2} justifyContent="space-between" margin={"20px"}>
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
      <Add/>
      </Box>
      </ThemeProvider>
      // <ToggleButton/>

  )
}

export default App
