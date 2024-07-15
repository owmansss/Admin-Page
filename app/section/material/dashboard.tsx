'use client'

import React, { useState, useEffect, useRef } from 'react'
import axios from '../api/axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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

interface ManagementTableProps {
  title: string
  inputs: { index: number; placeholder: string }[]
  tableHeads: { name: string }[]
  tableData: any[]
  buttonNames: { id: string; name: string }[]
  onButtonClick: (id: string) => void
}


const MaterialTable: React.FC<ManagementTableProps> = ({
  title,
  inputs,
  tableHeads,
  tableData,
  buttonNames,
  onButtonClick,
}) => {
  const handleClick = (id: string) => {
    onButtonClick(id)
  }
  const [valueMaterial, setValueMaterial] = useState([])
  const initialized = useRef(false)
  const getMaterial = async () => {
    try {
      const result = await axios.get('material')
      setValueMaterial(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  const [role, setRole] = useState('')
  const tempDataUser = async() => {
      try{
        const result = await axios.get("user/temp")
        setRole(result.data[0].role)
      }
      catch(err) {
        console.log(err)
      }
    }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getMaterial()
      tempDataUser()
    }
  }, [])
  return (
    <TabsContent value='Material' className='ml-12 mr-12'>
      <div className='w-full h-screen flex flex-col justify-start gap-5'>
        <div className='w-full h-1/5 flex justify-between items-end'>
          <h1 className='text-2xl font-bold'>Material Management</h1>
          <div className='flex justify-end w-1/2'>
            <TabsList>
              <TabsTrigger value='Material'>Material Management</TabsTrigger>
              <TabsTrigger value='MaterialNewForm'>
                Add New Material
              </TabsTrigger>
              <TabsTrigger value='MaterialReqForm'>
                Request Material
              </TabsTrigger>
              <TabsTrigger value='MaterialEditForm'>Edit Material</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className='w-full h-2/3 gap-5 flex flex-col'>
          <div className='flex'>
            <div className='w-2/3 flex justify-start items-center gap-5'>
              {inputs.map(({ index, placeholder }) => (
                <Input
                  key={index}
                  type='text'
                  placeholder={placeholder}
                  className='w-1/3 text-sm text-center'
                />
              ))}
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
                  <TableHead className='w-[50px]'>No</TableHead>
                  {tableHeads.map(({ name }) => (
                    <TableHead key={name}>{name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {valueMaterial.map((data) => (
                  <TableRow key={data.no}>
                    <TableCell>{data.no}</TableCell>
                    <TableCell>{data.Nama_Material}</TableCell>
                    <TableCell>{data.jumlah}</TableCell>
                    <TableCell>{data.nama_site}</TableCell>
                    <TableCell>{data.username}</TableCell>
                    <TableCell>{data.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}

export default MaterialTable
