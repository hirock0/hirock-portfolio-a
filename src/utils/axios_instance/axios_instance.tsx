import axios from "axios";
const publicAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const usePublicAxios = () => {
  publicAxios.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(String(error))
    }
  )
  publicAxios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(String(error))
    }
  )
  return publicAxios
}

