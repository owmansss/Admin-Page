'use client'

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
import React, { useState, useEffect } from 'react'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ManagementTableProps {
  title: string
  inputs: { index: number; placeholder: string }[]
  tableHeads: { name: string }[]
  tableData: any[]
  buttonNames: { id: string; name: string }[]
  onButtonClick: (id: string) => void
}

const UserTable: React.FC<ManagementTableProps> = ({
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

  const [userData, setUserData] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get('users')
        setUserData(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUsers()
  }, [])

  return (
    <TabsContent value='User' className='ml-12 mr-12'>
      <div className='w-full h-screen flex flex-col justify-start gap-5'>
        <div className='w-full h-[20%] flex justify-between items-end'>
          <h1 className='text-2xl font-bold'>User Management</h1>
          <div className='flex justify-end w-1/2'>
            <TabsList>
              <TabsTrigger value='User'>User Management</TabsTrigger>
              <TabsTrigger value='UserAddForm'>Add New User</TabsTrigger>
              <TabsTrigger value='UserEditForm'>Edit User</TabsTrigger>
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
                  <TableHead className='w-[50px]'>Username</TableHead>
                  <TableHead className='w-[50px]'>Password</TableHead>
                  <TableHead className='w-[50px]'>Email</TableHead>
                  <TableHead className='w-[50px]'>Nama</TableHead>
                  <TableHead className='w-[50px]'>Role</TableHead>
                </TableRow>
              </TableHeader>;
              <TableBody>
                {userData.map((data, index) => (
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
      </div>
    </TabsContent>
  )
}
export default UserTable
