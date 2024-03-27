import { useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined"
import "./TableChartInfo.css"

export const TableChartInfo = ({ chartTableData }) => {
  console.log(chartTableData, "chartTableData")
  const [collapsed, setCollapsed] = useState(false)

  const showTable = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="table-container rounded-lg overflow-hidden shadow-md flex flex-col w-full max-w-full">
      <div className="head-container">
        <span className="arrow-down-icon" onClick={showTable}>
          {collapsed ? <ExpandLessOutlinedIcon /> : <ExpandMoreIcon />}
        </span>
      </div>
      <div className={`fixTableHead ${collapsed ? "collapsed" : ""}`}>
        <table>
          <thead className="sticky-header">
            <tr>
              {chartTableData?.th.map((head: string, index: string) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          {[chartTableData?.tr1, chartTableData?.tr2].map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((cellData, cellIndex) => (
                <td key={cellIndex}>{cellData}</td>
              ))}

              {Array.from({ length: chartTableData?.th.length - rowData.length }).map((_, extraCellIndex) => (
                <td key={rowData.length + extraCellIndex}></td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
