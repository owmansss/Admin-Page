'use client'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import ManagementTable from '@/components/managementTable'
import {
  siteTableHeads as tableHeads,
  siteInputs as inputs,
  siteButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'
import SiteTable from './dashboard'
import SiteRegForm from './regForm'
import SiteEditForm from './editForm'

export default function Site() {
  const handleButtonClick = () => {
    // Add logic
    console.log('Site Button clicked!')
  }

  return (
    <Tabs defaultValue='Site'>
      <TabsContent value='Site'>
        <SiteTable
          title='Site Management'
          inputs={inputs}
          tableHeads={tableHeads}
          tableData={tableData}
          buttonNames={buttonNames}
          onButtonClick={handleButtonClick}
        />
      </TabsContent>
      <TabsContent value='SiteAddForm'>
        <SiteRegForm title='Add New Site' buttonNames={buttonNames} />
      </TabsContent>
      <TabsContent value='SiteEditForm'>
        <SiteEditForm title='Edit Site' buttonNames={buttonNames} />
      </TabsContent>
    </Tabs>
  )
}
