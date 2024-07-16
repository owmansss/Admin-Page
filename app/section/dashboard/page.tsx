'use client'
import ProjectSummary from './projectSummary'
import IncidentSummary from './incidentSummary'
import MaterialSummary from './materialSummary'
import RecentTask from './recentTask'
import axios from '../api/axios'
import React,{useState, useEffect, useRef} from 'react'
import {jwtDecode} from 'jwt-decode'


export default function Dashboard() {
  const [name, setName] = useState('')
  const [token, setToken] = useState('')

  const refreshToken = async() =>{
    try{
      const response = await axios.get("token")
      setToken(response.data.accessToken)
      const decoded = jwtDecode(response.data.accessToken)
      setName(decoded.username)
      console.log(decoded)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(() =>{
    refreshToken()
  }, [])
  
  return (
    <section className='w-full h-full flex flex-col ml-12 overflow-clip gap-5'>
      <div className='w-1/2 absolute h-1/5 flex justify-start items-center'>
      <h1 className='text-2xl font-bold'>Selamat Datang, {name} !</h1>
      </div>
      <ProjectSummary />
      <IncidentSummary />
      <div className='w-full h-full flex gap-10'>
        <MaterialSummary />
        <RecentTask />
      </div>
    </section>
  )
}