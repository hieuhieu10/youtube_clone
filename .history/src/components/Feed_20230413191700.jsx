import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import {SideBar, Videos} from "./"

const Feed = () => {
  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{height: {sx: 'auto', md: '92vh', } , borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <SideBar/>
        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
          coprright JSX media 2023
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>New
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>  
          <span style={{color: '#F31503'}}>

            videos
          </span>
        </Typography>
        <Videos Videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed