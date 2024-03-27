import axios from "axios"
import { Transients } from "../components/charts"
import { useLoaderData } from "react-router-dom"
import { TransientBootData } from "../interfaces/interfaces"
// import { Button } from "@mui/material"

export const FileTransientBootView: React.FC = () => {
  const { transientData } = useLoaderData() as {
    transientData: TransientBootData
  }
  console.log(transientData, "DATA DE TRANSITORIOS")
  return (
    <>
      <div
        style={{
          border: "1px solid #e0e0e0",
          height: "100%",
          borderRadius: "5px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "20px",
        }}
      >

        <Transients data={transientData} />
      </div>
    </>
  )
}

type LoaderFileParams = { params: { fileId: string } }

export const loaderTransientBoot = async ({ params }: LoaderFileParams) => {
  // console.log("PARAMS DE loaderTransientBoot -> ", params)
  try {
    const { fileId } = params
    const token = localStorage.getItem("token")

    const url = import.meta.env.VITE_BACKEND_GET_TRANSIENT_BOOT
    const res = await axios.get(`${url}/${fileId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const transientData = res.data
    // console.log(res, "RESS");
    return { transientData }
  } catch (error) {
    console.error("Error traer la data de Transitorios de Arranque:", error)
  }
}
