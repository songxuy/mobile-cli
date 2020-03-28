import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

var baseUrl = ''
var service = axios.create()

// Add a response interceptor
service.interceptors.request.use((config) => {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  // 上报相应的错误
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  if (response.data.status) {
    return response.data.data
  } else {
    // 上报相应的错误
    return Promise.reject(response.data.description)
  }
}, (error) => {
  // 上报相应的错误
  return Promise.reject(error)
})

export default service