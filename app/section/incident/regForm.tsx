// RegForm.tsx

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

const RegForm: React.FC<RegFormProps> = ({ title }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
  }

  return (
    <section className='h-screen flex flex-col ml-12 gap-5 mr-12'>
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>{title}</h1>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
        <form onSubmit={handleSubmit} className='w-full'>
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
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Select Project'
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Severity
              </label>
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Fill Severity'
              />
            </div>
          </div>
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Site
              </label>
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Site'
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                File Upload
              </label>
              <Input
                type='file'
                className='mt-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
      </div>
    </section>
  )
}

export default RegForm
