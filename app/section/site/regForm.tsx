import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, {useState, useEffect, useRef} from 'react'
import axios from '../api/axios'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

const SiteRegForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const [sitename, setSiteName] = useState('')
  const [message, setMessage] = useState([])
  
  const postSite = async () =>{
   try{ 
    const result = await axios.post("site", {sitename})
    setMessage(result.data)
  }
  catch(err) {
    console.log(err)
  }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
    postSite()
  }

  return (
    <TabsContent
      value='SiteAddForm'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='Site'>Site Management</TabsTrigger>
            <TabsTrigger value='SiteAddForm'>Add New Site</TabsTrigger>
            <TabsTrigger value='SiteEditForm'>Edit Site</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Site Name
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Site Name'
              type='text'
              required
              onChange={(e) => {setSiteName(e.target.value)}}
            />
          </div>
          <div className='mb-6 md:flex md:gap-6'></div>
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

export default SiteRegForm
