import { createContext, useState } from "react"

export const GlobalContext = createContext({
  // Maneja el ocultar o no el sidebar
  sidebarOpen: false,
  toggleSidebar: () => {},
  // Maneja el ocultar o no el formulario de creación de maquinas
  formCreateMachine: false,
  toggleFormCreateMachine: () => {},
})

export const GlobalProvider = ({ children }) => {
  /* Se podria crear un estado q cambie el sidebarOpen a false cuando el tamaño de la web sea menor a 768px con innerWidth.
  Iniciando el sidebar(en false) con ptanalla PC  y cambiando a modo tablet/mobil(en true) cuando sea menor a 768px*/
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [formCreateMachine, setFormCreateMachine] = useState(false)
  console.log(children, "CHILDREN")

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleFormCreateMachine = () => {
    setFormCreateMachine(!formCreateMachine)
  }

  return (
    <GlobalContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        formCreateMachine,
        toggleFormCreateMachine,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
