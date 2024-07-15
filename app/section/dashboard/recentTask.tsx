import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import axios from '../api/axios'
import React,{useState, useEffect, useRef} from 'react'


export default function RecentTask() {
  const initialized = useRef(false)
  const [selectedIncident, setSelectedIncident] = useState([])

  const getIncidentRecent = async () => {
    try {
      const result = await axios.get('incident/limit')
      setSelectedIncident(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getIncidentRecent()
    }
  }, [])

  return (
    <div className=''>
      <h1 className='text-xl font-bold mb-4'>Recent Tasks</h1>
      <div className='w-full h-full flex flex-col gap-10'>
        <div className='w-full border-2'>
          <Table className=' '>
            <TableCaption>end of table</TableCaption>
            <TableHeader className='border-b-2 border-gray-600'>
              <TableRow className='font-bold text-xl text-black'>
                <TableHead className='w-[50px]'>Ticket ID</TableHead>
                <TableHead className='w-[150px]'>Projek Name</TableHead>
                <TableHead className='w-[150px]'>Subject</TableHead>
                <TableHead className='w-[100px]'>Detail</TableHead>
                <TableHead className='w-[150px]'>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {selectedIncident.map((data) => (
                  <TableRow key={data.no}>
                    <TableCell>{data.idTicket}</TableCell>
                    <TableCell>{data.email_requester}</TableCell>
                    <TableCell>{data.subject}</TableCell>
                    <TableCell>{data.detail}</TableCell>
                    <TableCell>{data.status}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
