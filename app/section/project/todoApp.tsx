'use client'
import Link from 'next/link'
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
import { useRouter } from 'next/navigation'

let optionProjek
let optionTodo

export default function Todo() {
  const [selectedOptionTodo, setSelectedOptionTodo] = useState(false)
  const [nama_projek, setNamaProjek] = useState('')
  const [No, setNo] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [tanggal_selesai, setTanggalSelesai] = useState('')
  const [tanggal_mulai, setTanggalMulai] = useState('')
  const [user, setUser] = useState('')
  const [id_status, setIdStatus] = useState('')
  const [todo, setTodo] = useState('')
  const initialized = useRef(false)
  const [idprojek, setIdProjek] = useState('0')
  const [todoList, setTodoList] = useState([])
  const [state, setState] = useState(false)
  const router = useRouter()

  const [selectedOptionProjek, setSelectedOptionProjek] = useState(false)
  const getProject = async () => {
    const result = await axios.get('projek')
    optionProjek = result.data.map((data) => {
      return {
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
      }
    })
  }

  const handleSubmitPending = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
    axios
      .patch('todo/pending', { No })
      .then((result) => {
        alert('pending')
      })
      .catch((err) => {
        console.log(err)
      })
    router.refresh()
  }
  const handleSubmitFinish = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
    axios
      .patch('todo/finish', { No })
      .then((result) => {
        alert('finish')
      })
      .catch((err) => {
        console.log(err)
      })
    router.refresh()
  }

  const handleChangeProjek = (selectedOptionProjek: any) => {
    setSelectedOptionProjek(selectedOptionProjek)
    setNamaProjek(selectedOptionProjek.value[0].namaProjek)
    setUser(selectedOptionProjek.value[0].user)
    setIdProjek(selectedOptionProjek.value[0].id)
    getTodo()
  }

  const handlechangeTodo = (selectedOptionTodo: any) => {
    setSelectedOptionTodo(selectedOptionTodo)
    setNo(selectedOptionTodo.value)
  }

  const onsubmitTodo = (event: React.FormEvent) => {
    event.preventDefault()
    axios
      .post('todo/add', {
        todo,
        deskripsi,
        idprojek,
      })
      .then((result) => alert('todo added'))
      .catch((err) => console.log(err))
    router.refresh()
  }

  const getTodo = async () => {
    try {
      const result = await axios.post('todo', { idprojek })
      if (result.data) {
        setState(true)
        setTodoList(result.data)
        optionTodo = result.data.map((todoData: any) => {
          return {
            value: todoData.no,
            label: todoData.no,
          }
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getProject()
    }
  }, [])

  return (
    <TabsContent
      value='ToDo'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-1/4 flex justify-between items-end'>
        <div className='w-1/4 flex flex-col ml-14 gap-5'>
          <h1 className='text-2xl font-bold'>Detailed Project:</h1>
          <Select
            options={optionProjek}
            value={selectedOptionProjek}
            onChange={handleChangeProjek}
            className='w-full '
          />
          <div className='flex gap-5'>
            <Select
              options={optionTodo}
              value={selectedOptionTodo}
              onChange={handlechangeTodo}
              className='w-full '
            />
            <div className='w-1/3 flex gap-2'>
              <Button
                onClick={handleSubmitFinish}
                size={'save'}
                variant={'destructive'}
              >
                Finish
              </Button>
              <Button
                onClick={handleSubmitPending}
                size={'save'}
                variant={'destructive'}
              >
                Pending
              </Button>
            </div>
          </div>
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
            {todoList.map((todos) =>
              todos.status == 'submitted' ? (
                <div>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Nomor Id To do: {todos.no} {todos.todo}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-1xl font-bold'>
                        {todos.deskripsi}
                      </div>
                      <button
                        onClick={handleSubmitFinish}
                        className='text-xs text-muted-foreground text-green-500'
                      >
                        finish
                      </button>
                      <button
                        onClick={handleSubmitPending}
                        className='text-xs text-muted-foreground text-red-500'
                      >
                        pending
                      </button>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div></div>
              )
            )}
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
                <Input
                  type='text'
                  className='mb-2'
                  onChange={(e) => {
                    setTodo(e.target.value)
                  }}
                />
                <textarea
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
                  placeholder='Add To Do here...nigga nigga nigga pogger pogger pogger niggan nigga pogger'
                  onChange={(e) => {
                    setDeskripsi(e.target.value)
                  }}
                />
                <Button
                  onClick={onsubmitTodo}
                  variant={'destructive'}
                  size={'save'}
                >
                  Submit
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className='w-1/4 h-5/6 border-2 border-gray-300 rounded-md mx-5 my-5 flex flex-col justify-between'>
          <h1 className='text-2xl font-bold mt-5 ml-5'>Pending</h1>
          <div className='w-5/6 h-[80%] mx-auto px-2 my-5 flex flex-col justify-start gap-5 overflow-auto'>
            {todoList.map((todos) =>
              todos.status == 'pending' ? (
                <div>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Nomor Id To do :{todos.no} {todos.todo}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-1xl font-bold'>
                        {todos.deskripsi}
                      </div>
                      <p className='text-xs text-muted-foreground text-red-500'>
                        {todos.status}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div></div>
              )
            )}
          </div>
        </div>
        <div className='w-1/4 h-5/6 border-2 border-gray-300 rounded-md mx-5 my-5 flex flex-col justify-between'>
          <h1 className='text-2xl font-bold mt-5 ml-5'>Finish</h1>
          <div className='w-5/6 h-[80%] mx-auto px-2 my-5 flex flex-col justify-start gap-5 overflow-auto'>
            {todoList.map((todos) =>
              todos.status == 'finish' ? (
                <div>
                  <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                      <CardTitle className='text-sm font-medium'>
                        Nomor Id To do {todos.no} : {todos.todo}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='text-1xl font-bold'>
                        {todos.deskripsi}
                      </div>
                      <p className='text-xs text-muted-foreground text-green-500'>
                        {todos.status}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div></div>
              )
            )}
          </div>
        </div>
      </div>
    </TabsContent>
  )
}
