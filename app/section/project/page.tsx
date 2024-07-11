'use client'

import ManagementTable from '@/components/managementTable'
import {
  projectTableHeads as tableHeads,
  projectInputs as inputs,
  projectButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function Project() {
  const handleButtonClick = () => {
    // Add logic
    console.log('Project Button clicked!')
  }

  return (
    <ManagementTable
      title='Project Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
      onButtonClick={handleButtonClick}
    />
  )
}
