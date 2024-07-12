'use client'

// import ManagementTable from '@/components/managementTable'
import {
  projectTableHeads as tableHeads,
  projectInputs as inputs,
  projectButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import ProjectEditForm from './editForm'
import ProjectRegForm from './regForm'
import ProjectTable from './dashboard'
import { useState } from 'react'

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

export default function Project() {
  const handleButtonClick = () => {
    // Add logic
    console.log('Project Button clicked!')
  }
  const [value, setValue] = useState('ProjectEditForm')
  const editBtn = () => {
    console.log('tombol di pencet')
  }

  return (
    <Tabs defaultValue='Project'>
      <TabsContent value='Project'>
        <ProjectTable
          title='Project Management'
          inputs={inputs}
          tableHeads={tableHeads}
          tableData={tableData}
          buttonNames={buttonNames}
          onButtonClick={handleButtonClick}
          onClick={editBtn}
          editBtn={function (id: string): void {}}
        />
      </TabsContent>
      <TabsContent value='ProjectAddForm'>
        <ProjectRegForm title='Add New Project' buttonNames={buttonNames} />
      </TabsContent>
      <TabsContent value='ProjectEditForm'>
        <ProjectEditForm title='Edit Project' buttonNames={buttonNames} />
      </TabsContent>
    </Tabs>
  )
}
