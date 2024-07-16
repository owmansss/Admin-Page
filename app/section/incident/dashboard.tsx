'use client'

import React, { useState, useEffect, useRef } from 'react'
import axios from '../api/axios'
import { Button } from '@/components/ui/button'
import Select from 'react-select'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface IncidentTableProps {
  title: string
  value: any
  inputs: { index: number; placeholder: string }[]
  tableHeads: { name: string }[]
  onButtonClick: (id: string) => void
}

const IncidentTable: React.FC<IncidentTableProps> = ({
  title,
  inputs,
  tableHeads,
  onButtonClick,
}) => {
  const initialized = useRef<boolean>(false)
  const [incData, setIncData] = useState<any[]>([])

  const getInc = async () => {
    try {
      const result = await axios.get('incident')
      setIncData(result.data)
    } catch (err) {
      console.error('Error fetching incidents:', err)
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getInc()
    }
  }, [])

  const handleClick = (id: string) => {
    onButtonClick(id)
  }

  return (
    <TabsContent
      value='Incident'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='Incident'>Incident Management</TabsTrigger>
            <TabsTrigger value='IncidentAddForm'>Add New Incident</TabsTrigger>
            <TabsTrigger value='IncidentEditForm'>Edit Incident</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-2/3 gap-5 flex flex-col'>
        <div className='flex'>
          <div className='w-2/3 flex justify-start items-center gap-5'>
          <Select />
          <Select />
          <Select />
          <Select />
          </div>
          <div className='w-1/3 flex justify-end'>
            <Button variant={'destructive'} size={'search'}>
              Search
            </Button>
          </div>
        </div>
        <div className='overflow-y-scroll tracking-tighter'>
          <Table className='border-2'>
            <TableCaption>end of table</TableCaption>
            <TableHeader>
              <TableRow className='font-bold text-xl text-black'>
                {tableHeads.map(({ name }) => (
                  <TableHead key={name} className='w-[50px]'>
                    {name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {incData.map((data, index) => (
                <TableRow key={data.id || index}>
                  {Object.values(data).map((value, idx) => (
                    <TableCell key={idx}>{`${value}`}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TabsContent>
  )
}

export default IncidentTable
