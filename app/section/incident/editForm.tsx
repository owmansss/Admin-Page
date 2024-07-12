// RegForm.tsx

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
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

const IncidentEditForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
  }

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
      <div className='w-full h-screen gap-5 flex'>
        <form onSubmit={handleSubmit} className='w-2/3'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Email Required
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill email register'
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
                Project
              </label>
              <Select>
                <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <SelectValue placeholder='Project' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Project</SelectLabel>
                    <SelectItem value='kuda'>kuda</SelectItem>
                    <SelectItem value='embe'>embe</SelectItem>
                    <SelectItem value='joni'>joni</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Severity
              </label>
              <Select>
                <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <SelectValue placeholder='Severity' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Severity</SelectLabel>
                    <SelectItem value='kuda'>kuda</SelectItem>
                    <SelectItem value='embe'>embe</SelectItem>
                    <SelectItem value='joni'>joni</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Site
              </label>
              <Select>
                <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <SelectValue placeholder='Site' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Site</SelectLabel>
                    <SelectItem value='kuda'>kuda</SelectItem>
                    <SelectItem value='embe'>embe</SelectItem>
                    <SelectItem value='joni'>joni</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
          <Select>
            <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
              <SelectValue placeholder='Status' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value='kuda'>kuda</SelectItem>
                <SelectItem value='embe'>embe</SelectItem>
                <SelectItem value='joni'>joni</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
