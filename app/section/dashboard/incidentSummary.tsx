'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from '../api/axios'
import React,{useState, useEffect, useRef} from 'react'


export default function IncidentSummary(){
  const [incidentCreated, setIncidentCreated] = useState([])
  const [incidentClosed,  setIncidentClosed] = useState([])
  const [incidentPending, setIncidentPending] = useState([])
  const initialized = useRef(false)

  const getIncidentCreated = async() => {
    try{
      const result = await axios.get("incident/created")
      setIncidentCreated(result.data[0].jumlah)
    }
    catch(err) {
      console.log(err)
    }
  }

  const getIncidentClosed = async() => {
    try{
      const result = await axios.get("incident/closed")
      setIncidentClosed(result.data[0].jumlah)
    }
    catch(err) {
      console.log(err)
    }
  }

  const getIncidentPending = async() => {
    try{
      const result = await axios.get("incident/pending")
      setIncidentPending(result.data[0].jumlah)
    }
    catch(err) {
      console.log(err)
    }
  }
  useEffect(() =>{
    if(!initialized.current){
      initialized.current = true
      getIncidentCreated()
      getIncidentClosed()
      getIncidentPending()
    }
  }, [] )



 return (
   <div className=''>
     <h1 className='text-xl font-bold mb-4'>Incident Summary</h1>
     <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
       <Card>
         <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
           <CardTitle className='text-sm font-medium'>
             Incident Created
           </CardTitle>
         </CardHeader>
         <CardContent>
           <div className='text-2xl font-bold'>{incidentCreated}</div>
           <p className='text-xs text-muted-foreground text-green-500'>
             Last 3 Weeks
           </p>
         </CardContent>
       </Card>
       <Card>
         <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
           <CardTitle className='text-sm font-medium'>Incident Closed</CardTitle>
         </CardHeader>
         <CardContent>
           <div className='text-2xl font-bold'>{incidentClosed}</div>
           <p className='text-xs text-muted-foreground text-green-500'>
             Last 1 Weeks
           </p>
         </CardContent>
       </Card>{' '}
       <Card>
         <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
           <CardTitle className='text-sm font-medium'>
             Total Pending Incident
           </CardTitle>
         </CardHeader>
         <CardContent>
           <div className='text-2xl font-bold'>{incidentPending}</div>
           <p className='text-xs text-muted-foreground text-green-500'>
             Last 2 Weeks
           </p>
         </CardContent>
       </Card>
     </div>
   </div>
 )
}