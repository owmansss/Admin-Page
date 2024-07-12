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
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
interface ManagementTableProps {
  title: string
  inputs: { index: number; placeholder: string }[]
  tableHeads: { name: string }[]
  tableData: any[]
  buttonNames: { id: string; name: string }[]
  onButtonClick: (id: string) => void
}

const ProjectTable: React.FC<ManagementTableProps> = ({
  title,
  inputs,
  tableHeads,
  tableData,
  buttonNames,
  onButtonClick,
}) => {
  const handleClick = (id: string) => {
    onButtonClick(id)
  }

  return (
    <TabsContent
      value='Project'
      className='h-screen flex flex-col ml-12 gap-5 mr-12'
    >
      <div className='w-full h-[20%] flex justify-between items-end'>
        <h1 className='text-2xl font-bold'>Project Management</h1>
        <div className='flex justify-end w-1/2'>
          <TabsList>
            <TabsTrigger value='Project'>Project Management</TabsTrigger>
            <TabsTrigger value='ProjectAddForm'>Add New Project</TabsTrigger>
            <TabsTrigger value='ProjectEditForm'>Edit Project</TabsTrigger>
          </TabsList>
        </div>
      </div>
      <div className='w-full h-screen gap-5 flex flex-col'>
        <div className='flex'>
          <div className='w-2/3 flex justify-start items-center gap-5'>
            {inputs.map(({ index, placeholder }) => (
              <Input
                key={index}
                type='text'
                placeholder={placeholder}
                className='w-1/3 text-sm text-center'
              />
            ))}
          </div>
          <div className='w-1/3 flex justify-end'>
            <Button variant={'destructive'} size={'search'}>
              Search
            </Button>
          </div>
        </div>
        <div>
          <Table className='border-2'>
            <TableCaption>end of table</TableCaption>
            <TableHeader>
              <TableRow className='font-bold text-xl text-black'>
                <TableHead className='w-[50px]'>No</TableHead>
                {tableHeads.map(({ name }) => (
                  <TableHead key={name}>{name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((data, index) => (
                <TableRow key={data.id || index}>
                  {Object.values(data).map((value, idx) => (
                    <TableCell key={idx}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TabsContent>
  )
}

export default ProjectTable
