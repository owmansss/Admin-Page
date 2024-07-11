'use client'

import ManagementTable from '@/components/managementTable'
import {
  incidentTableHeads as tableHeads,
  incidentInputs as inputs,
  incidentButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function Incident() {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log('Button clicked! Implement your logic here.')
  }

  return (
    <ManagementTable
      title='Incident Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
      onButtonClick={handleButtonClick} // Pass the function as a prop
    />
  )
}
