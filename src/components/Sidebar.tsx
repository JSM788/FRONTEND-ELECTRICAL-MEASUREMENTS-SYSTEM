// import { CompanyLogo } from "../svgs/CompanyLogo"
import { useContext, useEffect, useState } from "react"
import { Sidebar as Prosidebar, Menu, MenuItem } from "react-pro-sidebar"
import { Box, Typography, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined"
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined"
// import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"
import { ItemProps } from "../interfaces/interfaces"
import { tokens } from "../theme"
import { GlobalContext } from "../context/GlobalContext"

const Item: React.FC<ItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}) => {
  const navigate = useNavigate()

  return (
    <MenuItem
      active={selected === title}
      onClick={() => {
        setSelected(title)
        navigate(to)
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

// type SidebarProps = {
//   toggled?: boolean;
//   onBackdropClick?: () => void;
//   breakPoint?: string;
//   collapsed?: boolean;
// };

export const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useContext(GlobalContext)
  const [selected, setSelected] = useState("Dashboard")
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  console.log(sidebarOpen, "sidebarOpen dentro de SIDEBAR");
  // Intercala nombre de pestañas
  const user = "user1"

  useEffect(() => {
    document.title = selected
  }, [selected])


  return (
    <>
      <Box
        style={{
          height: "100%",
          borderRight: "1px solid #e0e0e0",
          background: "#fff",
        }}
      >
        <Prosidebar
          collapsed={sidebarOpen} // oculta paracialmente o no el sidebar original
          toggled={!sidebarOpen} // activa el efecto del sidebar flotante
          onBackdropClick={toggleSidebar} // se activa cuando se cliclea fuera del sidebar
          breakPoint={"md"} // esconde al sidebar en una medida dada
          style={{ height: "100%" }}
          backgroundColor={"#fff"}
          // transitionDuration={300}
        >
          <Menu>
            <MenuItem style={{ margin: "10px 0 20px 0" }}>
              {!sidebarOpen && (
                <Box display="flex" justifyContent="center" alignItems="center">
                  <p className="font-bold text-xl">Ite Electric</p>
                  {/* <img
                    alt="logo-It-Electric"
                    src={`../../logo.svg`}
                  /> */}
                </Box>
              )}
            </MenuItem>

            {!sidebarOpen && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../ing.PNG`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h5"
                    // color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Juan Salinas
                  </Typography>
                  <Typography variant="h5">Admin</Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={sidebarOpen ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to={user === "user1" ? "/bk-dashboard" : "/pq-dashboard"}
                icon={<SpaceDashboardOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography variant="h6" sx={{ margin: "15px 0 5px 20px", color: "#0e63bb", fontWeight: "bold" }}>

                Data
              </Typography>

              <Item
                title="Asset Tree"
                to="/tree"
                icon={<AccountTreeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Machines"
                to="/machines"
                icon={<EngineeringOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Reports"
                to="/reports"
                icon={<AssessmentOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              {/* <Typography
                variant="h6"
                // color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Profile Form"
                to="/form"
                icon={<AccountTreeRoundedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </Box>
          </Menu>
        </Prosidebar>
      </Box>
      {/* <div className={x.container}>
        <div className={x.containt}>
          <div>
            <CompanyLogo />
          </div>

          <div>

          </div>
        </div>
      </div> */}
    </>
  )
}
