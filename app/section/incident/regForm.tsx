// RegForm.tsx

import React, {useState, useEffect, useRef} from 'react'
import axios from '../api/axios'
import Select from 'react-select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

let optionsPrjk
let optionsSite

const optionSeverity = [
  {
    value : 1, label: "Very High Priority"
  },
  {
    value : 2, label: "High Priority"
  },
  {
    value : 3, label: "Medium Priority"
  },
  {
    value : 4, label: "Low Priority"
  },
]

const IncidentRegForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
    postData()
  }
  const [email_requester, setEmailRequester] = useState('')
  const [company, setCompany] = useState('')
  const [subject, setSubject] = useState('')
  const [id_projek, setIdProjek] = useState('')
  const [id_site, setIdSite] = useState('')
  const [severity, setSeverity] = useState('')
  const [file, setFile] = useState('')
  const [id_status, setIdStatus] = useState('3')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [detail, setDetail] = useState('')
  const [idTicket, setIdTicket] = useState('')
  const [selectedSite, setSelectedSite] = useState(false)
  const [selectedPrjk, setSelectedPrjk] = useState(false)
  const [selectedSeverity, setSelectedSeverity] = useState(false)
  const initialized = useRef(false)

  const handleChangesite = (selectedSite) => {
    setSelectedSite(selectedSite)
    setIdSite(selectedSite.value)
  }
  const handleChangeSeverity = (selectedSeverity) => {
    setSelectedSeverity(selectedSeverity)
    setSeverity(selectedSeverity.value)
  }
  const handleChangeprjk = (selectedPrjk) => {
    setSelectedPrjk(selectedPrjk)
    setIdProjek(selectedPrjk.value)
  }
  const postData = async() =>{
    try {
      const postData = await axios.post("incident", {email_requester, company, subject, id_projek, id_site
        ,severity, file, detail, id_status, notes, email, idTicket
      })
    }
    catch(err) {
      console.log(err)
    }
  }
  const getSiteId = async() =>{
    try{
      const resultId = await axios.get("site")
      optionsSite = resultId.data.map((data) => {
        return { value:data.No , label:data.nama_site}
      })
    }
    catch(err) {
      console.log(err)
    }
  }
  const getPrjkId = async() =>{
    try{
      const resultId = await axios.get("projek")
      optionsPrjk = resultId.data.map((data) => {
        return { value:data.No , label:data.nama_projek}
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
      getPrjkId()
    }
  }, [] )

  return (
    <TabsContent
      value='IncidentAddForm'
      className='h-screen flex flex-col justify-end ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>Add Incident</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='Incident'>Incident Management</TabsTrigger>
            <TabsTrigger value='IncidentAddForm'>Add New Incident</TabsTrigger>
            <TabsTrigger value='IncidentEditForm'>Edit Incident</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className=''>
            <label className='block text-gray-700 text-sm font-bold mt-2'>
              Email Required
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill email register'
              type='text'
              required
              onChange={(e) => {setEmailRequester(e.target.value)}}
            />
          </div>
          <div className=''>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Company
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill Company'
              type='text'
              required
              onChange={(e) => {setCompany(e.target.value)}}
            />
          </div>
          <div className=''>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Subject
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill Subject Incident'
              type='text'
              required
              onChange={(e) => {setSubject(e.target.value)}}
            />
          </div>
          <div className='md:flex md:gap-6'>
            <div className='md:w-1/2 mt-6 md:mt-0'>
              <label className='block text-gray-700 text-sm font-bold mt-2'>
                Site
              </label>
              <Select
              options={optionsSite}
              value={selectedSite}
              onChange={handleChangesite}
              required
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Severity
              </label>
              <Select
                options={optionSeverity}
                value={selectedSeverity}
                onChange={handleChangeSeverity}
                required
              />
            </div>
          </div>
          <div className='md:flex md:gap-6'>
            <div className='md:w-1/2 md:mb-0'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Projek
              </label>
              <Select
              options={optionsPrjk}
              value={selectedPrjk}
              onChange={handleChangeprjk}
              required
            />
            </div>
            <div className='md:w-1/2'>
              <Input
                type='file'
                className='mt-7 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
          </div>
          <div className=''>
            <label className='block text-gray-700 text-sm font-bold mt-2'>
              Detail
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
              placeholder='Fill Detail Incident........'
              onChange={(e) => {setDetail(e.target.value)}}
            />
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

export default IncidentRegForm
