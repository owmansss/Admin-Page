'use client'

import { Tabs, TabsContent } from '@/components/ui/tabs'
import {
  userTableHeads as tableHeads,
  userInputs as inputs,
  userButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'
import UserRegForm from './regForm'
import UserEditForm from './editForm'
import UserTable from './dashboard'

export default function User() {
  const handleButtonClick = () => {
    // Add logic
    console.log('User Button clicked!')
  }

  return (
    <Tabs defaultValue='User'>
      <TabsContent value='User'>
        <UserTable
          title='User Management'
          inputs={inputs}
          tableHeads={tableHeads}
          tableData={tableData}
          buttonNames={buttonNames}
          onButtonClick={handleButtonClick}
        />
      </TabsContent>
      <TabsContent value='UserAddForm'>
        <UserRegForm title='Add New User' buttonNames={buttonNames} />
      </TabsContent>
      <TabsContent value='UserEditForm'>
        <UserEditForm title='Edit User' buttonNames={buttonNames} />
      </TabsContent>
    </Tabs>
  )
}
