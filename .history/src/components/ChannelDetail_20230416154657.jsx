import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"


const ChannelDetail = () => {
  
  const [ChannelDetail,setChannelDetail]= useState()

  const {id}= useParams();

  console.log(ChannelDetail)
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))
  },[id])

  return (
    <div>{id}</div>
  )
}

export default ChannelDetail