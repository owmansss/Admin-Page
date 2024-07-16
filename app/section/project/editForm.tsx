import React, { useState, useEffect, useRef } from 'react'
import axios from '../api/axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Select from 'react-select'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
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
  const [selectedOptionProjek, setSelectedOptionProjek] = useState<any>(false)
  const [selectedOption, setSelectedOption] = useState<any>(false)
  const [selectedOptionStatus, setSelectedOptionStatus] = useState<any>(false)
  const [nama_projek, setNamaProjek] = useState('')
  const [No, setNo] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [tanggal_selesai, setTanggalSelesai] = useState('')
  const [tanggal_mulai, setTanggalMulai] = useState('')
  const [user, setUser] = useState('')
  const [id_status, setIdStatus] = useState('')
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [options, setOptions] = useState<any[]>([])
  const [optionProjek, setOptionProjek] = useState<any[]>([])
  const [optionStatus, setOptionStatus] = useState<any[]>([])
  const initialized = useRef(false)

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
    axios
      .patch('projek', {
        No,
        nama_projek,
        deskripsi,
        tanggal_mulai: startDate,
        tanggal_selesai: endDate,
        id_status,
        user,
      })
      .then((result) => {
        console.log(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(startDate)
    console.log(tanggal_mulai)
  }

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption)
    setUser(selectedOption.value)
  }

  const handleChangeStatus = (selectedOptionStatus: any) => {
    setSelectedOptionStatus(selectedOptionStatus)
    setIdStatus(selectedOptionStatus.value)
  }

  const getUsers = async () => {
    try {
      const result = await axios.get('users')
      const options = result.data.map((user: any) => ({
        value: user.username,
        label: user.username,
      }))
      setOptions(options)
    } catch (err) {
      console.log(err)
    }
  }

  const getStatus = async () => {
    try {
      const result = await axios.get('statusProjek')
      const optionStatus = result.data.map((status: any) => ({
        value: status.id,
        label: status.status,
      }))
      setOptionStatus(optionStatus)
    } catch (err) {
      console.log(err)
    }
  }

  const getProject = async () => {
    try {
      const result = await axios.get('projek')
      const optionProjek = result.data.map((data: any) => ({
        value: [
          {
            id: data.No,
            namaProjek: data.nama_projek,
            deskripsi: data.Deskripsi,
            tanggalSelesai: data.tanggal_selesai,
            tanggalMulai: data.tanggal_mulai,
            user: data.user,
          },
        ],
        label: data.nama_projek,
      }))
      setOptionProjek(optionProjek)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getUsers()
      getStatus()
      getProject()
    }
  }, [])

  const handleChangeProjek = (selectedOptionProjek: any) => {
    setSelectedOptionProjek(selectedOptionProjek)
    setNamaProjek(selectedOptionProjek.value[0].namaProjek)
    setDeskripsi(selectedOptionProjek.value[0].deskripsi)
    setTanggalMulai(selectedOptionProjek.value[0].tanggalMulai)
    setTanggalSelesai(selectedOptionProjek.value[0].tanggalSelesai)
    setUser(selectedOptionProjek.value[0].user)
    setNo(selectedOptionProjek.value[0].id)
  }

  return (
    <TabsContent
      value='ProjectEditForm'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>{title}</h1>
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
      <div className='w-full h-screen gap-5 flex flex-col'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Project Name
            </label>
            <Select
              options={optionProjek}
              value={selectedOptionProjek}
              onChange={handleChangeProjek}
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Project Name
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill Project Name'
              type='text'
              value={nama_projek}
              onChange={(e) => {
                setNamaProjek(e.target.value)
              }}
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Detail
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
              placeholder='Fill Detail...'
              value={deskripsi}
              onChange={(e) => {
                setDeskripsi(e.target.value)
              }}
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
              <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  User
                </label>
                <Select
                  options={options}
                  value={selectedOption}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='md:w-1/2'>
              <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  Status
                </label>
                <Select
                  options={optionStatus}
                  value={selectedOptionStatus}
                  onChange={handleChangeStatus}
                  required
                />
              </div>
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
