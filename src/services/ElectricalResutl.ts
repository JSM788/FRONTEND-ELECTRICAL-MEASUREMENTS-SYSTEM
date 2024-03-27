import axios from 'axios';

export const fetchChartsData = async (fileId: string) => {
  // console.log("PRUEBA DE ID loaderFile -> ", params)
  try {

    const url = import.meta.env.VITE_BACKEND_GET_CHARTS_DATA
    const res = await axios.get(`${url}/${fileId}/`)

    const chartsData = res.data
    console.log(chartsData, "chartsData")
    return chartsData

  } catch (error) {
    console.error("Error traer la data de Resultados Electricos:", error)
  }
}
