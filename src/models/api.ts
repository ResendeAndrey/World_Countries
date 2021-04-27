import axios from 'axios'

const url = process.env.REACT_APP_URL_API

export const countryAPI = axios.create({
  baseURL: url,
  headers: {
    "Content-type": 'application/json',
  },
  
})