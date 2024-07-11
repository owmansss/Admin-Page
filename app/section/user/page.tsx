'use client'

import ManagementTable from '@/components/managementTable'
import {
  userTableHeads as tableHeads,
  userInputs as inputs,
  userButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function User() {
  const handleButtonClick = () => {
    // Add logic
    console.log('User Button clicked!')
  }

  return (
    <ManagementTable
      title='User Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
      onButtonClick={handleButtonClick}
    />
  )
}
