import { Stack } from "@mui/material"
import { categories } from "../utils/constants"
import { category } from "@mui/icons-material"
const SideBar = () => {
  return (
    <Stack direction='row' sx={{overflow: 'auto', height: {sx: 'auto', md: '95%'}, flexDirection: { md: 'column'}}}>
        {categories.map((category) => {
            <button>
                <span>{category.icon}</span>
                <span>{category.name}</span>
                
            </button>
        })}
    </Stack>
  )
}

export default SideBar