import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'



export default function Dashboard() {
  return (
    <TabsContent value='ProjectEditForm' className='h-screen flex flex-col ml-12 gap-5 mr-12'>
      <div className='flex justify-end w-1/2'>
        <TabsList>
          <TabsTrigger value='Project'>Project Management</TabsTrigger>
          <TabsTrigger value='ProjectAddForm'>Add Project</TabsTrigger>
          <TabsTrigger value='ProjectEditForm'>Edit Project</TabsTrigger>
        </TabsList>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
        <form className='w-full'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Project Name
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Fill Project Name'
            />
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
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Start Date
              </label>
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Start Date'
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                End Date
              </label>
              <Input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='End Date'
              />
            </div>
            <div className='md:w-1/2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                User
              </label>
              <Select>
                <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <SelectValue placeholder='User' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>User</SelectLabel>
                    <SelectItem value='kuda'>kuda</SelectItem>
                    <SelectItem value='embe'>embe</SelectItem>
                    <SelectItem value='joni'>joni</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='md:w-1/2'>
              <Select>
                <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <SelectValue placeholder='Change Status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value='Done'>Done</SelectItem>
                    <SelectItem value='Undone'>Undone</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button type='submit' variant={'destructive'} size={'search'}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </TabsContent>
  )
}
