import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5000/"

axios.create(
    {
            baseURL: "http://localhost:5000/",
            withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          }
      })

export default axios