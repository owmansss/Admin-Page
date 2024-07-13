import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Table } from 'lucide-react'

export default function RecentTask() {
  return (
    <div className='w-full h-full'>
      <h1 className='text-xl font-bold mb-4'>Recent Tasks</h1>
      <div className='w-full h-full flex flex-col gap-10'>
        <div>
          <Table className='border-2'>
            <TableCaption>end of table</TableCaption>
            <TableHeader>
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
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
