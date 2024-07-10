'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { tableHeads, inputs, tableData } from './data'

export default function Project() {
  interface tableData {
    id: number
    nama: string
    deskripsi: string
    endDate: string
    startDate: string
    user: string
    status: string
  }

  return (
    <section className='h-screen flex flex-col'>
      <div className='w-full h-1/3 flex justify-between'>
        <div className='w-full ml-12 h-full flex flex-col justify-center gap-8'>
          <div className='h-1/2 flex justify-between items-end w-[95%] pr-7'>
            <div className='w-1/2'>
              <h1 className='text-2xl font-bold'>Material Management</h1>
            </div>
            <div className='flex justify-end w-1/2 gap-10'>
              <Button variant={'destructive'} size={'add'}>
                Add New Material
              </Button>
              <Button variant={'destructive'} size={'add'}>
                Add Req Material
              </Button>
            </div>
          </div>
          <div className='w-full h-1/2 flex'>
            <div className='w-2/3 flex justify-start items-center gap-5'>
              {inputs.map(({ index, placeholder }) => {
                return (
                  <Input
                    key={index}
                    type='text'
                    placeholder={placeholder}
                    className='w-1/3 text-sm text-center'
                  />
                )
              })}
            </div>
            <div className='w-1/3 flex justify-center items-center'>
              <Button variant={'destructive'} size={'search'}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-2/3 px-[5vh]'>
        <Table className='border-2'>
          <TableCaption>end of table</TableCaption>
          <TableHeader>
            <TableRow className='font-bold text-xl text-black'>
              <TableHead className='w-[50px]'>No</TableHead>
              {tableHeads.map(({ name }) => {
                return <TableHead>{name}</TableHead>
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map(({ id, nama, jumlah, site, user, status }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{nama}</TableCell>
                <TableCell>{jumlah}</TableCell>
                <TableCell>{site}</TableCell>
                <TableCell>{user}</TableCell>
                <TableCell>{status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
