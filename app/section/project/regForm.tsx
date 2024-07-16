import React, { useState, useEffect, useRef } from 'react'
import axios from '../api/axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Select from 'react-select'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

const ProjectRegForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const [selectedOption, setSelectedOption] = useState<any>(false)
  const [selectedOptionStatus, setSelectedOptionStatus] = useState<any>(false)
  const [nama_projek, setNamaProjek] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [tanggal_selesai, setTanggalSelesai] = useState('')
  const [tanggal_mulai, setTanggalMulai] = useState('')
  const [user, setUser] = useState('')
  const [id_status, setIdStatus] = useState('')
  const [options, setOptions] = useState<any[]>([])
  const [optionStatus, setOptionStatus] = useState<any[]>([])
  const initialized = useRef(false)

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

  const postProjek = async () => {
    try {
      const result = await axios.post('projek', {
        nama_projek,
        deskripsi,
        tanggal_selesai,
        tanggal_mulai,
        user,
        id_status,
      })
      console.log(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getUsers()
      getStatus()
    }
  }, [])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    postProjek()
  }
  return (
    <TabsContent
      value='ProjectAddForm'
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
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Project Name
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill Project Name'
              type='text'
              required
              onChange={(e) => {
                setNamaProjek(e.target.value)
              }}
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Detail
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
              placeholder='Fill Detail Incident........'
              onChange={(e) => {
                setDeskripsi(e.target.value)
              }}
              required
            />
          </div>
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Start Date
              </label>
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Start Date'
                type='date'
                onChange={(e) => {
                  setTanggalMulai(e.target.value)
                }}
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                End Date
              </label>
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='End Date'
                type='date'
                onChange={(e) => {
                  setTanggalSelesai(e.target.value)
                }}
              />
            </div>
            <div className='md:w-1/2'>
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
            <div className='md:w-1/2'>
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
          <div className='flex items-center justify-between'>
            <Button type='submit' variant={'destructive'} size={'search'}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </TabsContent>
  )
}

export default ProjectRegForm
