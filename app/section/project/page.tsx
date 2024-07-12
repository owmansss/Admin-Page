'use client'

import ManagementTable from '@/components/managementTable'
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

interface RegFormProps {
  title: string
  buttonNames: { name: string }[]
}

export default function Project() {
  const handleButtonClick = () => {
    // Add logic
    console.log('Project Button clicked!')
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
