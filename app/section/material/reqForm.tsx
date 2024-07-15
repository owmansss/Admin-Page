import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import  Select  from 'react-select'
import axios from '../api/axios'
import React, { useState, useEffect, useRef } from 'react'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

let optionsUser
let optionsSite
let optionsMaterial

const MaterialReqForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const initialized = useRef(false)
  const [selectedOptionUser, setSelectedOptionUser] = useState(false)
  const [selectedOptionSite, setSelectedOptionSite] = useState(false)
  const [selectedOptionMaterial, setSelectedOptionMaterial] = useState(false)
  const [id_user, setIdUser] = useState('')
  const [id_site, setIdSite] = useState('')
  const [idMaterial, setIdMaterial] = useState('')
  const [jumlah, setJumlah] = useState('')

  const handleChangeUser = (selectedOptionUser) => {
    setSelectedOptionUser(selectedOptionUser)
    setIdUser(selectedOptionUser.value)
  }
  const handleChangeSite = (selectedOptionSite) => {
    setSelectedOptionSite(selectedOptionSite)
    setIdSite(selectedOptionSite.value)
  }
  const handleChangeMaterial = (selectedOptionMaterial) => {
    setSelectedOptionMaterial(selectedOptionMaterial)
    setIdMaterial(selectedOptionMaterial.value)
  }

  const getUsers = async () => {
    try {
      const resultUser = await axios.get('users')
      optionsUser = resultUser.data.map((user) => {
        return { value: user.id, label: user.username }
      })
    } catch (err) {
      console.log(err)
    }
  }

  const getSite = async () => {
    try {
      const resultSite = await axios.get('site')
      optionsSite = resultSite.data.map((site) => {
        return { value: site.No, label: site.nama_site }
      })
    } catch (err) {
      console.log(err)
    }
  }
  const getMaterial = async () => {
    try {
      const resultMaterial = await axios.get('material/stck')
      optionsMaterial = resultMaterial.data.map((material) => {
        return { value: material.no, label: material.nama_material }
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getUsers()
      getSite()
      getMaterial()

    }
  },[])


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
    axios.post("material/req", {
      id_user,jumlah,id_site,idMaterial
    }).then((resultadd) => {
      alert("data berhasil dimasukan")
    }).catch((error) =>{
      alert("terjadi error")
    })
  }

  return (
    <TabsContent
      value='MaterialReqForm'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>Request Management</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='Material'>Material Management</TabsTrigger>
            <TabsTrigger value='MaterialNewForm'>Add New Material</TabsTrigger>
            <TabsTrigger value='MaterialReqForm'>Request Material</TabsTrigger>
            <TabsTrigger value='MaterialEditForm'>Edit Material</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Material Name
            </label>
            <Select
                  options={optionsMaterial}
                  value={selectedOptionMaterial}
                  onChange={handleChangeMaterial}
                  required
                />
          </div>
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Total
              </label>
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Fill Total'
                type='number'
                onChange={(e) => setJumlah(e.target.value)}
                required
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Site
              </label>
              <Select
                  options={optionsSite}
                  value={selectedOptionSite}
                  onChange={handleChangeSite}
                  required
                />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                User
              </label>
              <Select
                  options={optionsUser}
                  value={selectedOptionUser}
                  onChange={handleChangeUser}
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

export default MaterialReqForm