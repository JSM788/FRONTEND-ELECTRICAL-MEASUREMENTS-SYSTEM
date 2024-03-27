import { useContext, useState } from "react"
import { FormCreateMachine } from "../components/"
import { TreeView } from "@mui/x-tree-view/TreeView"
import { TreeItem } from "@mui/x-tree-view/TreeItem"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import axios from "axios"
import { EngineData } from "../interfaces/interfaces"
import { useLoaderData, useNavigate } from "react-router-dom"
import { Prueba } from "."
import { GlobalContext } from "../context/GlobalContext"

export default function Tree()  {
  const { files } = useLoaderData();
  const { toggleFormCreateMachine } = useContext(GlobalContext);
  const navigate = useNavigate()
  // const [showForm, setShowForm] = useState(false)
  console.log(files, "FILES");

const renderTree = (machines: EngineData[]): React.ReactNode =>
    
    machines.map((machine) => (
      <TreeItem key={machine.engine_pk} nodeId={machine.engine_pk} label={machine.name}>
        {machine.electrical_result && (
          <TreeItem nodeId={machine.electrical_result.electrical_result_pk} label="Resultados Eléctricos">
            {machine.electrical_result.test_electrical_result.map((childNodeTest) => (
              <TreeItem
                key={childNodeTest.test_electrical_result_pk}
                nodeId={childNodeTest.test_electrical_result_pk || "electrical-result-item"}
                label={childNodeTest.test_date_time}
                onDoubleClick={() => navigate(`/file/electrical/${childNodeTest.test_electrical_result_pk}`)}
                // onDoubleClick={() => handleGetFile(childNodeTest.test_electrical_result_pk, "ER")}
              />
            ))}
          </TreeItem>
        )}
        {machine.transient_boot && (
          <TreeItem nodeId={machine.transient_boot.transient_boot_pk} label="Transitorios de Arranque">
            {machine.transient_boot.test_transient_boot.map((childNodeTest) => (
              <TreeItem
                key={childNodeTest.test_transient_boot_pk}
                nodeId={childNodeTest.test_transient_boot_pk || "transient-boot-item"}
                label={childNodeTest.test_date_time}
                onDoubleClick={() => navigate(`/file/transient/${childNodeTest.test_transient_boot_pk}`)}
              />
            ))}
          </TreeItem>
        )}
      </TreeItem>
  ));

  return (
    <>
      <div className="h-full w-full bg-white rounded-md p-5">
        {/* <button onClick={() => setShowForm(!showForm)}>Shw Form</button> */}
            <button id="toggle-btn" onClick={toggleFormCreateMachine} className="bg-red-200">
              ☰ Toggle Show Create
            </button>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: "100%", flexGrow: 1, overflowY: "auto", width: "100%" }}
          >
            {renderTree(files)}
          </TreeView>
      </div>
    </>
  )
}

export const loaderTree = async () => {
  try {
    const token = localStorage.getItem('token');
    const url = import.meta.env.VITE_BACKEND_GET_FOLDERS_AND_FILES
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data, "res.data")

    
    const files = res.data;
    return { files };
  } catch (error) {
    console.error("Error al obtener la estructura de archivos y carpetas2:", error);
    throw error;
  }
}