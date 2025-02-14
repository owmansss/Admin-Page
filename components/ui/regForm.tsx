// RegForm.tsx

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

const RegForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic here to handle form submission
  }

  return (
    <section className='h-screen flex flex-col ml-12 gap-5 mr-12'>
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>Add New Site</h1>
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
    </section>
  )
}

export default RegForm
