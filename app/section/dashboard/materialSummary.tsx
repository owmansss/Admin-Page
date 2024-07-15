import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from '../api/axios'
import React,{useState, useEffect, useRef} from 'react'


export default function MaterialSummary() {
  const [materialAvailable, setMaterialAvailable] = useState([])
  const [materialOut, setMaterialOut] = useState([])
  const initialized = useRef(false)
  const getMaterialAvailable = async() => {
    try{
      const result = await axios.get("material/available")
      setMaterialAvailable(result.data[0].jumlah)
    }
    catch(err) {
      console.log(err)
    }
  }
  const getMaterialOut = async() => {
    try{
      const result = await axios.get("material/out")
      setMaterialOut(result.data[0].jumlah)
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() =>{
    if(!initialized.current){
      initialized.current = true
      getMaterialAvailable()
      getMaterialOut()
    }
  }, [] )


  return (
    <div className='w-1/3'>
      <h1 className='text-xl font-bold mb-4'>Material Summary</h1>
      <div className='flex flex-col gap-10'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Material Available
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{materialAvailable}</div>
            <p className='text-xs text-muted-foreground text-green-500'>
              Last 3 Weeks
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Material Out
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{materialOut}</div>
            <p className='text-xs text-muted-foreground text-green-500'>
              Last 3 Weeks
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
