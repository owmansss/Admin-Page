import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function RecentTask() {
  return (
    <div className=''>
      <h1 className='text-xl font-bold mb-4'>Recent Tasks</h1>
      <div className='w-full h-full flex flex-col gap-10'>
        <div className='w-full h-1/2 overflow-y-scroll border-2'>
          <Table className=' '>
            <TableCaption>end of table</TableCaption>
            <TableHeader className='border-b-2 border-gray-600'>
              <TableRow className='font-bold text-xl text-black'>
                <TableHead className='w-[50px]'>No</TableHead>
                <TableHead className='w-[150px]'>Username</TableHead>
                <TableHead className='w-[150px]'>Password</TableHead>
                <TableHead className='w-[100px]'>Role</TableHead>
                <TableHead className='w-[150px]'>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>username1</TableCell>
                <TableCell>password1</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>user1@example.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
