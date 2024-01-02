import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";


const customFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit'
}) 


customFetch.interceptors.request.use(function (config){
  const user = getUserFromLocalStorage()
  if(user){
    config.headers['Authorization'] = `Bearer ${user}`
  }
  return config;
})

export default customFetch