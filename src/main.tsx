import ReactDOM from "react-dom/client"
import { Root } from "./Root"
import { Login, Machines, Reports, Dashboard } from "./pages/"
import { loaderTree } from "./pages/"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthInterceptor } from "./interceptors/auth-interceptor"

import { FileElectricalResultView, loaderElectricalResult } from "./pages/"
import {
  FileTransientBootView,
  loaderTransientBoot,
} from "./pages/FileTransientBootView"
import { PQ_Dashboard } from "./pages/PowerQuality/PQ_Dashboard"
import Tree from "./pages/Tree"
import { GlobalProvider } from "./context/GlobalContext"
import { ProtectedRoute } from "./utils/ProtectedRoute"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Root />,
    children: [
      {
        element: <ProtectedRoute role="user1" />,
        children: [
          {
            path: "/bk-dashboard",
            element: <Dashboard />,
          },
          {
            path: "/tree",
            element: <Tree />,
            loader: loaderTree,
          },
          {
            path: "/machines/",
            element: <Machines />,
          },
          {
            path: "/file/electrical/:fileId",
            element: <FileElectricalResultView />,
            // loader: loaderElectricalResult,
          },
          {
            path: "/file/transient/:fileId",
            element: <FileTransientBootView />,
            loader: loaderTransientBoot,
          },
          {
            path: "/reports",
            element: <Reports />,
          },
          {
            path: "/power-quality",
            element: <PQ_Dashboard />,
          },
        ]
      },
      {
        element: <ProtectedRoute role="user2" />,
        children: [
          {
            path: "/pq-dashboard",
            element: <PQ_Dashboard />,
          },
          {
            path: "/tree",
            element: <Tree />,
            loader: loaderTree,
          },
         
        ]
      }
    ],
  },
]);


// Ejecuta auth-interceptor
AuthInterceptor()

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={routes} />
    </GlobalProvider>
  // </React.StrictMode>
)
