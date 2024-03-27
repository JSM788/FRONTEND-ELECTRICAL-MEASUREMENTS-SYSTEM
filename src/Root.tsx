import { Sidebar, Navbar, FormCreateMachine } from "./components"
import { Outlet } from "react-router-dom"
import "./index.css"
import { useState } from "react";
// import { Prueba } from "./pages"

// import { CssBaseline, ThemeProvider } from "@mui/material"
// import { ColorModeContext, useMode } from "./theme"

export const Root = () => {

  const [userRoles, setUserRoles] = useState({
    roles: ["user1"]
  });

  // const [theme, colorMode] = useMode()
  // #141B2D
  return (
    <>
      <div className="flex h-full w-full relative">
        <Sidebar />
        <main className="flex flex-col h-full w-full">
          <Navbar/>
          {/* <br />
          <Prueba /> */}
          <div className="w-full h-full p-5 bg-gray-50" >
          {/* <h1>{userRoles.roles}</h1> */}
            <Outlet context={userRoles.roles}/>
          </div>
        </main>
      </div>
      <FormCreateMachine />
    </>
  )
}
