import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({channelDetail}) => 
   (
    <Box sx={{boxShadow: 'none', boxShadow: '20px', }}>
      <Link to={`/channel/${channelDetail}?.id?.channelId`}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'} }>

        </CardContent>
    </Link>
    </Box>
    
  )
    

export default ChannelCard