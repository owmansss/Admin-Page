// RegForm.tsx

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

import Select from 'react-select'
import axios from '../api/axios'
import React, {useState, useEffect, useRef} from 'react'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

let optionsPrjk
let optionsSite
let optionsStatus
let optionInc

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

const IncidentEditForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
    updateData()
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
  const [selectedStatus, setSelectedStatus] = useState(false)
  const [selectedSeverity, setSelectedSeverity] = useState(false)
  const [selectedIncidentTicket, setSelectedIncidentTicket] = useState(false)
  const initialized = useRef(false)

  const handleChangesite = (selectedSite) => {
    setSelectedSite(selectedSite)
    setIdSite(selectedSite.value)
  }
  const handleChangeIncidentTicket = (selectedIncidentTicket) => {
    setSelectedIncidentTicket(selectedIncidentTicket)
    setIdTicket(selectedIncidentTicket.value[0].no)
    setEmailRequester(selectedIncidentTicket.value[0].email_requester)
    setCompany(selectedIncidentTicket.value[0].company)
    setSubject(selectedIncidentTicket.value[0].subject)
    setDetail(selectedIncidentTicket.value[0].detail)
    setIdTicket(selectedIncidentTicket.value[0].idTicket)
  }
  const handleChangeStatus = (selectedStatus) => {
    setSelectedStatus(selectedStatus)
    setIdStatus(selectedStatus.value)
  }
  const handleChangeSeverity = (selectedSeverity) => {
    setSelectedSeverity(selectedSeverity)
    setSeverity(selectedSeverity.value)
  }
  const handleChangeprjk = (selectedPrjk) => {
    setSelectedPrjk(selectedPrjk)
    setIdProjek(selectedPrjk.value)
  }
  const updatePost = async() =>{
    try {
      const updateData = await axios.post("incident", {email_requester, company, subject, id_projek, id_site
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

  const getIncidentDetail = async() => {
    try{
    const result = await axios.get('incident')
    optionInc = result.data.map((data) => {
      return { value: [{
        no : data.no,
        email_requester : data.email_requester,
        company : data.company,
        subject : data.subject,
        detail : data.detail,
        idTicket: data.idTicket}], label:data.idTicket}
    })
    }
    catch(err) {
      console.log(err)
    }
  }

  
  const getStatusId = async() =>{
    try{
      const resultId = await axios.get("incStatus")
      optionsStatus = resultId.data.map((data) => {
        return { value:data.No , label:data.status}
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
      getStatusId()
      getIncidentDetail()
    }
  }, [] )



  return (
    <TabsContent
      value='IncidentEditForm'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>Edit Incident</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='Incident'>Incident Management</TabsTrigger>
            <TabsTrigger value='IncidentAddForm'>Add New Incident</TabsTrigger>
            <TabsTrigger value='IncidentEditForm'>Edit Incident</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-[100%] gap-5 flex'>
        <form onSubmit={handleSubmit} className='w-2/3'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Incident Ticket
            </label>
            <Select
              options={optionInc}
              value={selectedIncidentTicket}
              onChange={handleChangeIncidentTicket}
              required
              />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Email Required
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill email register'
              required
              value={email_requester}
              onChange={(e)=>{setEmailRequester(e.target.value)}}
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Company
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill Company'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Subject
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill Subject Incident'
            />
          </div>
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
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
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
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
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Detail
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
              placeholder='Fill Detail Incident........'
            />
          </div>
          <div className='flex items-center justify-between'>
            <Button type='submit' variant={'destructive'} size={'search'}>
              Submit
            </Button>
          </div>
        </form>
        <form className='w-1/3 mt-6 flex flex-col'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
                Status
        </label>
        <Select
                options={optionsStatus}
                value={selectedStatus}
                onChange={handleChangeStatus}
                required
              />
          <div className='mt-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Detail
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
              placeholder='Notes..'
            />
          </div>
          <div className='md:w-1/2 mb-6 md:mb-0'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Ditugaskan Kepada
            </label>
            <Input
              type='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill Email'
            />
          </div>
        </form>
      </div>
    </TabsContent>
  )
}

export default IncidentEditForm
