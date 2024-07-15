import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState, useEffect, useRef } from 'react'
import  Select  from 'react-select'
import axios from '../api/axios'
interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}
let optionsMaterial
let optionsMaterialStatus

const MaterialEditForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const [selectedOptionMaterial, setSelectedOptionMaterial] = useState(false)
  const [selectedOptionMaterialStatus, setSelectedOptionMaterialStatus] = useState(false)
  const [idMaterial, setIdMaterial] = useState('')
  const [no, setNo] = useState('')
  const [jumlah, setJumlah] = useState('')
  const [status, setStatus] = useState('')
  const [nama_site, setNamaSite] = useState('')
  const [username, setUsername] = useState('')
  const [id_status, setIdStatus] = useState('')
  const [id_user, setIdUser] = useState('')
  const [id_site, setIdSite] = useState('')
  const initialized = useRef(false)
  const handleChangeMaterial = (selectedOptionMaterial) => {
    setSelectedOptionMaterial(selectedOptionMaterial)
    setIdMaterial(selectedOptionMaterial.value[0].idMaterial)
    setJumlah(selectedOptionMaterial.value[0].jumlah)
    setNamaSite(selectedOptionMaterial.value[0].nama_site)
    setUsername(selectedOptionMaterial.value[0].username)
    setIdUser(selectedOptionMaterial.value[0].id_user)
    setIdSite(selectedOptionMaterial.value[0].id_site)
    setNo(selectedOptionMaterial.value[0].no)
    
  }

  const handleChangeMaterialStatus = (selectedOptionMaterialStatus) => {
    setSelectedOptionMaterialStatus(selectedOptionMaterialStatus)
    setIdStatus(selectedOptionMaterialStatus.value)
  }

  const getMaterialStatus = async() => {
    try{
      const resultStatusMaterial = await axios.get("materialStatus")
      optionsMaterialStatus = resultStatusMaterial.data.map((statusmat) => {
        return { value : statusmat.no,  label: statusmat.status}
      })
    }
    catch(err){
      console.log(err)
    }
    
    
  }

  const getMaterial = async () => {
    try {
      const resultMaterial = await axios.get('material')
      optionsMaterial = resultMaterial.data.map((material) => {
        return { value: [{
          no: material.no,
          nama_material : material.Nama_Material,
          jumlah : material.jumlah,
          username : material.username,
          status: material.status,
          nama_site : material.nama_site,
          idMaterial : material.idMaterial,
          id_site : material.id_site,
          id_status : material.id_status,
          id_user : material.id_user
        }
      ], label: material.Nama_Material }
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getMaterial()
      getMaterialStatus()

    }
  },[])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
    console.log(no)
    console.log(id_status)
    axios.patch("material", {no,id_status}).
    then((result) => {alert("berhasil update")})
    .catch(err => console.log(err))
  }

  return (
    <TabsContent
      value='MaterialEditForm'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>Edit Material</h1>
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
                value={jumlah}
                onChange={(e)=>setJumlah(e.target.value)}
                disabled
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Site
              </label>
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Fill Site'
                disabled
                value={nama_site}
                onChange={(e) => {setIdSite(id_site)}}
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                User
              </label>
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='User'
                disabled
                value={username}
                onChange={(e) => {setIdUser(id_user)}}
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Status
              </label>
              <Select
                  options={optionsMaterialStatus}
                  value={selectedOptionMaterialStatus}
                  onChange={handleChangeMaterialStatus}
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

export default MaterialEditForm
