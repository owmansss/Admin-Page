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
import { Input } from '@/components/ui/input'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tableData } from './data'
import axios from '../api/axios'
import React, {useState, useEffect} from 'react'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

const UserRegForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const [nama, setnama] = useState('')
  const [idRole, setIdRole] = useState('')
  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [message, setMessage] = useState([])
  const [roleName, setRoleName] = useState([])
  
  const getRoleName = async() => {
    try{
      const result = await axios.get('/roles')
      setRoleName(result.data)
    }
    catch(err){
      console.log(err)
    }
  }
  
  useEffect(() =>{
    getRoleName()
  }, [] )

  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
    axios.post('users/admin', {nama, idRole, email,username,password})
    .then(result => {
      setMessage(result.data)
    }).catch(err => {setMessage(err.message)})
  }

  return (
    <TabsContent
      value='UserAddForm'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='User'>User Management</TabsTrigger>
            <TabsTrigger value='UserAddForm'>Add New User</TabsTrigger>
            <TabsTrigger value='UserEditForm'>Edit User</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Username
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Username'
              onChange={(e) => {setusername(e.target.value)}}
              type='text'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Nama
            </label>
            <Input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Nama Lengkap'
              onChange={(e) => {setnama(e.target.value)}}
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Email
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='email'
              onChange={(e) => {setemail(e.target.value)}}
              type='email'
              required
            />
          </div>
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-2/3'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Password
              </label>
              <Input
                type='password'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Password'
                onChange={(e) => {setpassword(e.target.value)}}
                required
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Role
              </label>
              <select required className='form-select' onChange={(e) => {setIdRole(e.target.value)}}>
                <option selected disabled>pilih role</option>
                {
                  roleName.map(role => (
                    <option value={role.id}>{role.role}</option>
                  ))
                }
              </select>
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

export default UserRegForm
