import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"


const ChannelDetail = () => {
  
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState(null)

  const {id}= useParams();

  console.log(channelDetail,videos)

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

  },[id])
  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,211,1) 100%)',
                    zIndex: 10, 
                    height: '300px'
                    }}>
                        <ChannelCard channelDetail={channelDetail} />
        </div>
      </Box>
    </Box>
  )
}

export default ChannelDetail