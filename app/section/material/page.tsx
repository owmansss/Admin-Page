'use client'

import ManagementTable from '@/components/managementTable'
import {
  materialTableHeads as tableHeads,
  materialInputs as inputs,
  materialButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function Material() {
  const handleButtonClick = () => {
    // Add logic
    console.log('Material Button clicked!')
  }

  return (
    <ManagementTable
      title='Material Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
      onButtonClick={handleButtonClick}
    />
  )
}
