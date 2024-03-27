import axios from "axios"

export const AuthInterceptor = () => {
  const token = localStorage.getItem("token")

  axios.interceptors.request.use((request) => {
    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    }
    return request
  })
}

// const api = axios.create();

// api.interceptors.request.use((config) => {
//   console.log(config, "cnf");
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;
