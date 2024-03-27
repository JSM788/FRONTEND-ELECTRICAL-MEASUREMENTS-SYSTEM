import { Box, IconButton, useTheme } from "@mui/material"
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined"

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import { ColorModeContext } from "../theme"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined"
import { GlobalContext } from "../context/GlobalContext"

export const Navbar = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [system, setSystem] = useState<string>("dashboard")
  const { sidebarOpen, toggleSidebar } = useContext(GlobalContext)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const handleLogout = () => {
    try {
      handleClose()
      localStorage.clear()
      navigate("/")
    } catch (error) {
      console.error("Error al realizar el logout:", error)
    }
  }

  const handleChangeSystem = () => {
    const newSystem = system === "dashboard" ? "power-quality" : "dashboard"
    setSystem(newSystem)
    navigate(newSystem)
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={1.5}
      sx={{ borderBottom: "1px solid #e0e0e0" }}
    >
      <Box display="flex" borderRadius="3px">
        <IconButton onClick={toggleSidebar}>
          {sidebarOpen ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={handleChangeSystem}>
          <ChangeCircleOutlinedIcon />
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton> */}
        {/* <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton onClick={handleOpen}>
          <PersonOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}
