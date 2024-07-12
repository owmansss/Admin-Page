'use client'

import { Tabs, TabsContent } from '@/components/ui/tabs'
import {
  materialTableHeads as tableHeads,
  materialInputs as inputs,
  materialButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'
import IncidentTable from './dashboard'
import IncidentRegForm from './regForm'
import IncidentEditForm from './editForm'

export default function Material() {
  const handleButtonClick = () => {
    // Add logic
    console.log('Material Button clicked!')
  }

  return (
    <Tabs defaultValue='Incident'>
      <TabsContent value='Incident'>
        <IncidentTable
          title='Incident Management'
          inputs={inputs}
          tableHeads={tableHeads}
          tableData={tableData}
          buttonNames={buttonNames}
          onButtonClick={handleButtonClick}
        />
      </TabsContent>
      <TabsContent value='IncidentAddForm'>
        <IncidentRegForm title='Add New Incident' buttonNames={buttonNames} />
      </TabsContent>
      <TabsContent value='IncidentEditForm'>
        <IncidentEditForm title='Edit Incident' buttonNames={buttonNames} />
      </TabsContent>
    </Tabs>
  )
}
