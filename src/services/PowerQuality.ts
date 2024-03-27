
import axios from 'axios';

export const fetchChartsDataPQ = async () => {
  // console.log("PRUEBA DE ID loaderFile -> ", params)
  try {

    const url = "http://127.0.0.1:8000/api/v1/power_quality/first_node/"
    const res = await axios.get(`${url}`)

    const chartsData = res.data
    console.log(chartsData, "chartsData")
    return chartsData

  } catch (error) {
    console.error("Error traer la data de Calidad de Energía:", error)
  }
}


export const fetchChartsDataCharts = async (fileId: string) => {
  // console.log("PRUEBA DE ID loaderFile -> ", params)
  try {

    const url = `http://127.0.0.1:8000/api/v1/power_quality/file_pq/data/${fileId}/`
    const res = await axios.post(`${url}`, {dt:"voltage"})

    const chartsData = res.data
    console.log(chartsData, "chartsData")
    return chartsData

  } catch (error) {
    console.error("Error traer la data de una grafica en especifico:", error)
  }
}
