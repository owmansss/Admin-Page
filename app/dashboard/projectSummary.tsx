'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { projectData } from '../data'
import axios from '../section/api/axios'
import React,{useState, useEffect, useRef} from 'react'

export default function ProjectSummary() {
  const [projekCreated, setProjekCreated] = useState([])
  const [projekClosed, setProjekClosed] = useState([])
  const [projekPending, setProjekPending] = useState([])
  const initialized = useRef(false)

  const getProjekCreated = async() => {
    try{
      const result = await axios.get("projek/created")
      setProjekCreated(result.data[0].jumlah)
    }
    catch(err) {
      console.log(err)
    }
  }

  const getProjekClosed = async() => {
    try{
      const result = await axios.get("projek/closed")
      setProjekClosed(result.data[0].jumlah)
    }
    catch(err) {
      console.log(err)
    }
  }

  const getProjekPending = async() => {
    try{
      const result = await axios.get("projek/pending")
      setProjekPending(result.data[0].jumlah)
    }
    catch(err) {
      console.log(err)
    }
  }
  useEffect(() =>{
    if(!initialized.current){
      initialized.current = true
      getProjekCreated()
      getProjekClosed()
      getProjekPending()
    }
  }, [] )

  return (
    <div className=''>
      <h1 className='text-xl font-bold mb-4'>Project Summary</h1>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Project Created
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{projekCreated}</div>
            <p className='text-xs text-muted-foreground text-green-500'>
              Last 3 Weeks
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Project Closed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{projekClosed}</div>
            <p className='text-xs text-muted-foreground text-green-500'>
              Last 1 Weeks
            </p>
          </CardContent>
        </Card>{' '}
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Pending Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{projekPending}</div>
            <p className='text-xs text-muted-foreground text-green-500'>
              Last 2 Weeks
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
