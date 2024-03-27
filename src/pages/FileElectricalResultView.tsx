import {  useParams } from "react-router-dom"
import { BarChart } from "../components/charts/BarChart"
import { CylinderChart, MainChart, PercentageStackedAreaChart } from "../components/charts"
import { Box, Button, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import { Trend } from "../components/charts/Trend"
import { TableChartInfo } from "../components"
import { LineChart } from "../components/charts/LineChart"
import { BarChartOutlined } from "@mui/icons-material"
import { styled } from '@mui/system';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import ElectricalServicesOutlinedIcon from '@mui/icons-material/ElectricalServicesOutlined';
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import { fetchChartsData } from "../services/ElectricalResutl"
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';

interface GraphButtonProps {
  onClick: () => void
  label: string
  icon: React.ReactNode
}

type TableRow = (string | number)[];

interface TableData {
  th: string[];
  tr1: TableRow;
  tr2: TableRow;
}

interface ElectricResultButtonProps {
  label: string;
  icon: React.ReactNode;
  activeComponents: React.ReactNode[];
  setActiveComponents: (components: React.ReactNode[]) => void;
  setTableData?: (tableData: TableData) => void | undefined;
  tableData?: TableData | undefined;
}

const CustomButton = styled(Button)({
  color: 'inherit',
  // borderColor: '#c3c3c3',
  borderColor: "inherit",
  backgroundColor: '#d8e1ea',
  fontSize: ".9rem",
  '&:hover': {
    color: '#1976D2',
  },
});

const GraphButton: React.FC<GraphButtonProps> = ({ onClick, label, icon }) => (
  <CustomButton variant="outlined" size="small" onClick={onClick} style={{ textTransform: 'none' }} startIcon={icon}>
    {label}
  </CustomButton>
)

const ElectricResultButton: React.FC<ElectricResultButtonProps> = ({
  label,
  activeComponents,
  setActiveComponents,
  tableData,
  setTableData,
  icon
}) => {
  return (
    <>
      <Button
        startIcon={icon}
        variant="outlined"
        size="small"
        onClick={() => {
          setActiveComponents(activeComponents);
          tableData && setTableData?.(tableData);
        }}
      >
      {label}
      </Button>
    </>
  )
}

type RouteParams = {
  fileId: string;
};

export const FileElectricalResultView: React.FC = () => {
  const { fileId } = useParams<RouteParams>();
  console.log(fileId);
  const [chartsData, setChartsData] = useState();
  const [activeGroup, setActiveGroup] = useState<string | null>(null)
  const [activeComponents, setActiveComponents] = useState<React.ReactNode[]>([])
  const [tableData, setTableData] = useState<React.ReactNode[]>([]);
  console.log(tableData, "tableData");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (fileId) {
          const data = await fetchChartsData(fileId);
          console.log(data, "data de charts");
          setChartsData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [fileId]);

  return (
    <>
      <div className="flex flex-col h-full p-5 rounded-md bg-white space-y-4 overflow-auto ">
        <div
          style={{ border: "1px solid #e0e0e0" }}
          className="flex flex-col h-full p-5 rounded-md bg-white space-y-4 overflow-auto px-5 py-5 pb-0"
        >
          <h1 className="text-lg text-center font-bold text-gray-600">
            Tipos de gráficos
          </h1>
          <div className="flex space-x-4 ">
            <div className="flex space-x-4">
              <GraphButton
                label="Calidad de Energía"
                icon={<OfflineBoltOutlinedIcon style={{color: '#1976D2'}}/>}
                onClick={() => setActiveGroup("groupbtn1")}
              />
              <GraphButton
                label="Rendimiento de máquina"
                icon={<AnalyticsOutlinedIcon style={{color: '#1976D2'}}/>}
                onClick={() => setActiveGroup("groupbtn2")}
              />
              <GraphButton
                label="Corrientes"
                icon={<ElectricalServicesOutlinedIcon style={{color: '#1976D2'}}/>}
                onClick={() => setActiveGroup("groupbtn3")}
              />
              <GraphButton
                label="Espectros"
                icon={<GraphicEqOutlinedIcon style={{color: '#1976D2'}}/>}
                onClick={() => setActiveGroup("groupbtn4")}
              />
              <GraphButton
                label="Conexión"
                icon={<SettingsInputComponentOutlinedIcon style={{color: '#1976D2'}}/>}
                onClick={() => setActiveGroup("groupbtn5")}
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex space-x-4">
              {activeGroup === "groupbtn1" && (
                <>
                  <ElectricResultButton
                    label="Nivel de voltaje"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[
                      <CylinderChart data={chartsData.popupVoltage.gauge} />,
                      <LineChart data={chartsData.popupVoltage.history} />,
                    ]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupVoltage.table}
                    setTableData={setTableData}
                  />
                  <ElectricResultButton
                    label="Desbalance de voltaje"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[
                      <CylinderChart data={chartsData.popupUnbalanceVoltage.gauge}/>,
                      <LineChart data={chartsData.popupUnbalanceVoltage.history} />,
                    ]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupUnbalanceVoltage.table}
                    setTableData={setTableData}
                  />
                  <ElectricResultButton
                    label="Distorsion armonica"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[
                      <CylinderChart data={chartsData.popupDistortion.gauge}/>,
                      <LineChart data={chartsData.popupDistortion.history} />,
                    ]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupDistortion.table}
                    setTableData={setTableData}
                  />
                  <ElectricResultButton
                    label="Distorsion total"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[
                      <CylinderChart data={chartsData.popupFullDistortion.gauge}/>,
                      <LineChart data={chartsData.popupFullDistortion.history} />,
                    ]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupFullDistortion.table}
                    setTableData={setTableData}
                  />
                  <ElectricResultButton
                    label="Energía"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupEnergy.table}
                    setTableData={setTableData}
                  />
                  <ElectricResultButton
                    label="Armónicos"
                    icon={<BarChartOutlined />}
                    activeComponents={[<BarChart data={chartsData.popupHarmonics}/>]}
                    setActiveComponents={setActiveComponents}
                  />
                </>
              )}
            </div>

            <div className="flex space-x-4">
              {activeGroup === "groupbtn2" && (
                <>
                  <ElectricResultButton
                    label="Factor de servicio efectivo"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[
                      <PercentageStackedAreaChart data={chartsData.popupFactorService[0]}/>
                    ]}
                    setActiveComponents={setActiveComponents}
                    // tableData={chartsData.popupFactorService.table}
                    // setTableData={setTableData}
                  />
                  <ElectricResultButton
                    label="Eficiencia"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[
                      <CylinderChart data={chartsData.popupEfficiency.gauge}/>,
                      <LineChart data={chartsData.popupEfficiency.history} />,
                    ]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupEfficiency.table}
                    setTableData={setTableData}
                  />
                  <ElectricResultButton
                    label="Carga"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[
                      <CylinderChart data={chartsData.popupLoad.gauge}/>,
                      <LineChart data={chartsData.popupLoad.history} />,
                    ]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupLoad.table}
                    setTableData={setTableData}
                  />
                </>
              )}
            </div>

            <div className="flex space-x-4">
              {activeGroup === "groupbtn3" && (
                <>
                  <ElectricResultButton
                    label="Nivel de corriente"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[
                      <CylinderChart data={chartsData.popupCurrentLevel.gauge}/>,
                      <LineChart data={chartsData.popupCurrentLevel.history} />,
                    ]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupCurrentLevel.table}
                    setTableData={setTableData}
                  />
                  <ElectricResultButton
                    label="Desbalance de corriente"
                    icon={<ShowChartOutlinedIcon />}
                    activeComponents={[
                      <CylinderChart data={chartsData.popupCurrentUnbalance.gauge}/>,
                      <LineChart data={chartsData.popupCurrentUnbalance.history} />,
                    ]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupCurrentUnbalance.table}
                    setTableData={setTableData}
                  />
                </>
              )}
            </div>
            
            <div className="flex space-x-4">
              {activeGroup === "groupbtn4" && (
                <>
                  <ElectricResultButton
                    label="Barras de Rotor"
                    icon={<BarChartOutlined />}
                    activeComponents={[
                      // <CylinderChart data={chartsData.popupBarRotor.gauge}/>,
                      <LineChart data={chartsData.popupBarRotor.history} />,
                    ]} 
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupBarRotor.table}
                    setTableData={setTableData}
                  />
                </>
              )}
            </div>

            <div className="flex space-x-4">
              {activeGroup === "groupbtn5" && (
                <>
                  <ElectricResultButton
                    label="Componentes simétricos"
                    icon={<BarChartOutlined />}
                    activeComponents={[]}
                    setActiveComponents={setActiveComponents}
                    tableData={chartsData.popupUnbalanceVoltage.table}
                    setTableData={setTableData}
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col h-full space-y-4 w-full">
            <div className="flex flex-col h-full border-2 rounded space-x-4 lg:flex-row">
              <div className="flex-1 h-full">
                <div  className="flex-1 h-full"> {activeComponents[0]} </div>
              </div>
              {/* {activeComponents.map((component, index) => (
                <div key={index} className="flex-1 h-full">
                  {component}
                </div>
              ))} */}
            </div>
            <div>
              {Object.keys(tableData).length > 0 && <TableChartInfo chartTableData={tableData} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
