import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import {SearchIcon} from '@mui/material'

const SearchBar = () => {
  return (
    <Paper component="form" onSubmit={()=>{}}
    sx={{borderRadius: 20 }}>
        Search
    </Paper>
  )
}

export default SearchBar