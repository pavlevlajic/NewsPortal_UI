import axios from "axios"

const apiEnvironment = {
    local: "https://localhost:5001",
    // development: "https://news.api.pavlevlajic.com"
    development: "https://pavlevlajic.com",
}

const axiosInstance = axios.create({
    baseURL: apiEnvironment.development + "/api",
})

export default axiosInstance

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers["Time-Zone"] =
            Intl.DateTimeFormat().resolvedOptions().timeZone
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)
