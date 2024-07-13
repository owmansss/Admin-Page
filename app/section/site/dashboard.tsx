'use client'

import React, {useState, useEffect, useRef} from 'react'
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

const SiteTable: React.FC<ManagementTableProps> = ({
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
  const initialized = useRef(false)
  const [siteData, setSiteData] = useState([])


  const getSite = async() => {
    try{
      const result = await axios.get("site")
      setSiteData(result.data)
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() =>{
    if(!initialized.current){
      initialized.current = true
      getSite()
    }
  }, [] )

  return (
    <TabsContent
      value='Site'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>Site Management</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='Site'>Site Management</TabsTrigger>
            <TabsTrigger value='SiteAddForm'>Add New Site</TabsTrigger>
            <TabsTrigger value='SiteEditForm'>Edit Site</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
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
        <div>
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
              {siteData.map((data, index) => (
                <TableRow key={data.id || index}>
                  {Object.values(data).map((value, idx) => (
                    <TableCell key={idx}>{value as String}</TableCell>
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

export default SiteTable
