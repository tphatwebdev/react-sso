import axios from "axios"

// Cách custom axios instance với interceptors tự động lấy access token cũng như refresh token của Auth0 và và gán vào header trước khi gọi api.
const customAxiosInstance = axios.create()

// let getAccessTokenSilently
// export const injectFn = _getAccessTokenSilently => {
//   getAccessTokenSilently = _getAccessTokenSilently
// }

// // Request interceptor
// customAxiosInstance.interceptors.request.use(async (config) => {
//   const accessToken = await getAccessTokenSilently()
//   console.log('accessToken: ', accessToken)
//   config.headers.Authorization = `Bearer ${accessToken}`
//   return config
// })

export default customAxiosInstance
