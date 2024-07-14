'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Select from 'react-select'
import axios from '../api/axios'
import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const options = [
  {
    value: 'hello',
    label: 'hello',
  },
]

export default function Todo() {
  const [selectedOption, setSelectedOption] = useState(false)

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }

  return (
    <TabsContent
      value='ToDo'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-1/4 flex justify-between items-end'>
        <div className='w-1/4 flex flex-col ml-14 gap-5'>
          <h1 className='text-2xl font-bold'>Detailed Project:</h1>
          <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            className='w-full '
          />
        </div>
        <div className='flex justify-end w-1/2 gap-5'>
          <TabsList>
            <TabsTrigger value='Project'>Project Management</TabsTrigger>
            <TabsTrigger value='ProjectAddForm'>Add New Project</TabsTrigger>
            <TabsTrigger value='ProjectEditForm'>Edit Project</TabsTrigger>
          </TabsList>
          <TabsList>
            <TabsTrigger value='ToDo'>To Do List</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-3/4 mr-5 flex justify-around'>
        <div className='w-1/4 h-5/6 border-2 border-gray-300 rounded-md mx-5 my-5 flex flex-col justify-between'>
          <h1 className='text-2xl font-bold mt-5 ml-5'>TO DO</h1>
          <div className='w-5/6 h-[80%] mx-auto px-2 my-5 flex flex-col justify-start gap-5 overflow-auto'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 2:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='destructive'
                className='font-bold mb-10 mx-5'
                size={'save'}
              >
                Add To Do
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-80'>
              <div className='flex flex-col gap-1'>
                <label className='text-md'>To Do</label>
                <Input type='text' className='mb-2' />
                <textarea
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
                  placeholder='Add To Do here...nigga nigga nigga pogger pogger pogger niggan nigga pogger'
                />
                <Button variant={'destructive'} size={'save'}>
                  Submit
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className='w-1/4 h-5/6 border-2 border-gray-300 rounded-md mx-5 my-5 flex flex-col justify-between'>
          <h1 className='text-2xl font-bold mt-5 ml-5'>Pending</h1>
          <div className='w-5/6 h-[80%] mx-auto px-2 my-5 flex flex-col justify-start gap-5 overflow-auto'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='w-1/4 h-5/6 border-2 border-gray-300 rounded-md mx-5 my-5 flex flex-col justify-between'>
          <h1 className='text-2xl font-bold mt-5 ml-5'>Finish</h1>
          <div className='w-5/6 h-[80%] mx-auto px-2 my-5 flex flex-col justify-start gap-5 overflow-auto'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>To Do 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-1xl font-bold'>open the seseame</div>
                <p className='text-xs text-muted-foreground text-green-500'>
                  OnSubmitted
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}
