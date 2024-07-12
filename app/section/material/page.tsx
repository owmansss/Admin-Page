'use client'

import { Tabs, TabsContent } from '@/components/ui/tabs'
import {
  materialTableHeads as tableHeads,
  materialInputs as inputs,
  materialButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'
import MaterialTable from './dashboard'
import MaterialReqForm from './reqForm'
import MaterialEditForm from './editForm'
import MaterialNewForm from './newForm'

export default function Material() {
  const handleButtonClick = () => {
    // Add logic
    console.log('Material Button clicked!')
  }

  return (
    <Tabs defaultValue='Material'>
      <TabsContent value='Material'>
        <MaterialTable
          title='Material Management'
          inputs={inputs}
          tableHeads={tableHeads}
          tableData={tableData}
          buttonNames={buttonNames}
          onButtonClick={handleButtonClick}
        />
      </TabsContent>
      <TabsContent value='MaterialReqForm'>
        <MaterialReqForm title='Add Req Material' buttonNames={buttonNames} />
      </TabsContent>
      <TabsContent value='MaterialEditForm'>
        <MaterialEditForm title='Edit Material' buttonNames={buttonNames} />
      </TabsContent>
      <TabsContent value='MaterialNewForm'>
        <MaterialNewForm title='New Material' buttonNames={buttonNames} />
      </TabsContent>
    </Tabs>
  )
}
