import { Stack, Box } from "@mui/material"

import {VideoCard,ChannelCard} from './'
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia} from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants"


const Videos = ({videos}) => {
  console.log(videos)
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video = {item}/>}
          {/* {item.id.channelId && <ChannelCard channelDetail = {item}/>} */}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos