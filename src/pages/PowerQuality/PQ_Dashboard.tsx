import Box from "@mui/material/Box"
import { CheckboxesGroup } from "../../components/CheckboxesGroup"
import { tabNamesData } from "../../data/tabNamesData"
import { useEffect, useState } from "react"
import PruebaChart from "../../components/charts/PruebaChart"
import { fetchChartsDataPQ } from "../../services/PowerQuality"
import {TreePrueba} from "../../components/TreePrueba"

export const PQ_Dashboard = () => {
  const tabName = "voltage" // Cambia según la pestaña que desees mostrar
  const tab = tabNamesData[tabName][0] || []
  const [checkboxesNames, setCheckboxesNames] = useState([])
  console.log(tab, "tab2")
  console.log(checkboxesNames, "checkboxesNames en pq")

  const [chartData, setChartData] = useState([])
  const [dataTree, setDataTree] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChartsDataPQ();
        console.log(data, "DATA EN PQ DASHBOARD")
        setDataTree(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div
      style={{ border: "1px solid #e0e0e0" }}
      className="flex flex-col h-full p-5 rounded-md bg-white space-y-4 overflow-auto outline-black"
    >
      {/* <button className="border border-solid pointer bg-red-200" onClick={handleClickGetChartsData}>
        Click2
      </button> */}
      {
        dataTree.length > 0 && <TreePrueba data={dataTree} setChartData={setChartData}/>
      }



      <Box mt={2}>
        <CheckboxesGroup
          tabName={tab.name}
          checkboxes={tab.checkboxes}
          buttonNames={tab.buttons}
          setCheckboxesNames={setCheckboxesNames}
        />
      </Box>
      <PruebaChart checkboxNames={checkboxesNames} data={chartData.data} />
    </div>
  )
}

// export const PQ_Dashboard = () => {
//   return (
//     <>
//       <div
//         style={{ border: "1px solid #e0e0e0" }}
//         className="flex flex-col h-full p-5 rounded-md bg-white space-y-4 overflow-auto outline-black"
//       >
//         <div className="flex justify-between space-x-4">
//           <table className="table-auto border-collapse w-full">
//             <thead>
//               <tr>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 1</th>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 2</th>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 3</th>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 4</th>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 5</th>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 6</th>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 7</th>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 8</th>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 9</th>
//                 <th className="bg-gray-200 border border-gray-400 px-4 py-2">Columna 10</th>

//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 1</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 2</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 3</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 4</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 5</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 6</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 7</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 8</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 9</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 1 - Columna 10</td>

//               </tr>
//               <tr>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 1</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 2</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 3</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 4</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 5</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 6</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 7</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 8</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 9</td>
//                 <td className="border border-gray-400 px-4 py-2">Fila 2 - Columna 10</td>

//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   )
// }
