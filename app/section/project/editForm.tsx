import { useState } from 'react'
import { tableData } from './data.tsx'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

const ProjectEditForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const { handleSubmit } = useForm({
    mode: 'onSubmit',
  })

  const handleStartDateSelect = (date: Date | Date[] | undefined) => {
    if (date instanceof Date) {
      setStartDate(date)
    }
  }

  const handleEndDateSelect = (date: Date | Date[] | undefined) => {
    if (date instanceof Date) {
      setEndDate(date)
    }
  }

  const onSubmit = (data: any) => {
    console.log('Form Data:', data)
  }

  return (
    <TabsContent
      value='ProjectEditForm'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='Project'>Project Management</TabsTrigger>
            <TabsTrigger value='ProjectAddForm'>Add New Project</TabsTrigger>
            <TabsTrigger value='ProjectEditForm'>Edit Project</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Project Name
            </label>
            <Select>
              <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                <SelectValue placeholder='Project Name' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>User</SelectLabel>
                  {tableData.map(({ nama }) => (
                    <SelectItem key={nama} value={nama}>
                      {nama}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Detail
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
              placeholder='Fill Detail...'
            />
          </div>
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Start Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <div className='relative'>
                    <Button
                      variant={'outline'}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    >
                      {startDate
                        ? format(startDate, 'yyyy-MM-dd')
                        : 'Select Date'}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-80' />
                    </Button>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={startDate}
                    onSelect={handleStartDateSelect}
                    disabled={(date) => date > new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                End Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <div className='relative'>
                    <Button
                      variant={'outline'}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    >
                      {endDate ? format(endDate, 'yyyy-MM-dd') : 'Select Date'}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={endDate}
                    onSelect={handleEndDateSelect}
                    disabled={(date) => date > new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                User
              </label>
              <Select>
                <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <SelectValue placeholder='User' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>User</SelectLabel>
                    {tableData.map(({ user }) => (
                      <SelectItem key={user} value={user}>
                        {user}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='md:w-1/2'>
              <Select>
                <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <SelectValue placeholder='Select User' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value='Done'>Done</SelectItem>
                    <SelectItem value='Undone'>Undone</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button type='submit' variant={'destructive'} size={'search'}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </TabsContent>
  )
}

export default ProjectEditForm
