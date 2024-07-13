import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Todo() {
  return (
    <TabsContent
      value='ToDo'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>Detailed Project: Nama Project</h1>
        <div className='flex justify-end w-1/2 gap-5'>
          <TabsList>
            <TabsTrigger value='Project'>Project Management</TabsTrigger>
            <TabsTrigger value='ProjectAddForm'>Add New Project</TabsTrigger>
            <TabsTrigger value='ProjectEditForm'>Edit Project</TabsTrigger>
          </TabsList>
          <TabsList>
            <TabsTrigger value='ToDo'>To Do List</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-[100%] h-full  mr-5 border-black flex justify-around'>
        <div className='w-1/4 border-2 border-gray-300 rounded-md h-[80%] mx-5 my-5 flex flex-col justify-between'>
          <div className='w-5/6 h-[30%] mx-auto my-5 flex flex-col justify-between'>
            <h1 className='text-2xl font-bold'>TO DO</h1>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
              placeholder=''
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='destructive'
                className='font-bold mb-10 mx-5'
                size={'save'}
              >
                Add To Do
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-80'>
              <div className='flex flex-col gap-1'>
                <label className='text-md'>To Do</label>
                <Input type='text' className='mb-2' />
                <textarea
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
                  placeholder='Add To Do here...nigga nigga nigga pogger pogger pogger niggan nigga pogger'
                />
                <Button variant={'destructive'} size={'save'}>
                  Submit
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className='w-1/4 border-2 border-gray-300 rounded-md h-[80%] mx-5 my-5 flex flex-col justify-between'>
          <div className='w-5/6 h-[30%] mx-auto my-5 flex flex-col justify-between'>
            <h1 className='text-2xl font-bold'>Pending</h1>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
              placeholder=''
            />
          </div>
        </div>
        <div className='w-1/4 border-2 border-gray-300 rounded-md h-[80%] mx-5 my-5 flex flex-col justify-between'>
          <div className='w-5/6 h-[30%] mx-auto my-5 flex flex-col justify-between'>
            <h1 className='text-2xl font-bold'>Finish</h1>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
              placeholder=''
            />
          </div>
        </div>
      </div>
    </TabsContent>
  )
}
