import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia} from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants"


const VideoCard = ({video: {id:{videoId},snippet}}) => {
  
  return (
    <Card>
      <Link>
      <CardMedia image={snippet?.thumbnail?.high?.url}
      alt={snippet?.title}
      
      />
      </Link>
    </Card>
  )
}

export default VideoCard