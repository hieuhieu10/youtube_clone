import { Stack } from "@mui/material"
import { categories } from "../utils/constants"
import { Category } from "@mui/icons-material"
const SideBar = () => {
  return (
    <Stack direction='row' sx={{overflow: 'auto', height: {sx: 'auto', md: '95%'}, flexDirection: { md: 'column'}}}>
        {categories.map((Category)=>{
            <button>
                <span>{Category.icon}</span>
                <span>{Category.name}</span>
                
            </button>
        })}
    </Stack>
  )
}

export default SideBar