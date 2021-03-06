import axios from 'axios'

const api = axios.create({
  baseURL: 'https://assignment3-server.herokuapp.com/'
  // baseURL: 'http://localhost:3001'
})

  // Add the bearer token to the axios instance
  // Axios will then add this to the HTTP header with every subsequent request
  const setJwt = (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
   }
 

export { api, setJwt }