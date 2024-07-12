import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tableData } from './data'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

const UserRegForm: React.FC<RegFormProps> = ({ title, buttonNames }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Add logic
  }

  return (
    <TabsContent
      value='UserAddForm'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='User'>User Management</TabsTrigger>
            <TabsTrigger value='UserAddForm'>Add New User</TabsTrigger>
            <TabsTrigger value='UserEditForm'>Edit User</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Username
            </label>
            <Input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Username'
            />
          </div>
          <div className='mb-6 md:flex md:gap-6'>
            <div className='md:w-2/3'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Password
              </label>
              <Input
                type='password'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='End Date'
              />
            </div>
            <div className='md:w-1/3'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Role
              </label>
              <Select>
                <SelectTrigger className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                  <SelectValue placeholder='Select Role' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {tableData.map(({ role }) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
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

export default UserRegForm
