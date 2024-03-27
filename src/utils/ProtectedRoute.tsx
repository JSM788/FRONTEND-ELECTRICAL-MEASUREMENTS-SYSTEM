import { Navigate, Outlet, useOutletContext } from "react-router-dom"

export const ProtectedRoute = ({ role }) => {
  const token = localStorage.getItem('token');
  console.log(role, "ROLE")
  
  const context = useOutletContext()
  console.log()
  console.log(context, "CONTEXT");
  if (!token || !context[0].includes(role)) {

    return <Navigate to="/" replace/>
  }
  return <Outlet context={context}/>
}

