import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Select from 'react-select'
import axios from '../api/axios'
import React, {useState, useEffect, useRef} from 'react'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

let options

const SiteEditForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const [sitename, setsitename] = useState('')
  const [no, setNo] = useState('')
  const [message, setMessage] = useState([])
  const [selectedOption, setSelectedOption] = useState(false)
  const initialized = useRef(false)

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    setsitename(selectedOption.label)
    setNo(selectedOption.value)
  }
  
  const getSiteId = async() =>{
    try{
      const resultId = await axios.get("site")
      options = resultId.data.map((data) => {
        return { value:data.No , label:data.nama_site}
      })
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() =>{
    if(!initialized.current){
      initialized.current = true
      getSiteId()
    }
  }, [] )

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
    const update = async() => {
     try{
      const result = await axios.patch("site",{no, sitename})
      setMessage(result.data)
     }
     catch(err){
      console.log(err)
     }
    }
    update()
  }

  return (
    <TabsContent
      value='SiteEditForm'
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
            <label>
              current siteName
            </label>
            <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Site Name
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Site Name'
              type='text'
              value={sitename}
              onChange={(e) => {setsitename(e.target.value)}}
              required
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

export default SiteEditForm
