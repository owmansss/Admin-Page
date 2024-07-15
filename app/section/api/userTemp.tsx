import React, {useState, useEffect, useRef} from 'react'
import axios from './axios'

export const userTemp = async() =>{
    const initialized = useRef(false)
    const [tempData, setTempData] = useState([])
    const tempDataUser = async() => {
        try{
          const result = await axios.get("user/temp")
          setTempData(result.data)
        }
        catch(err) {
          console.log(err)
        }
      }
}