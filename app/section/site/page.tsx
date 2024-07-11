'use client'

import ManagementTable from '@/components/managementTable'
import {
  siteTableHeads as tableHeads,
  siteInputs as inputs,
  siteButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function Site() {
  const handleButtonClick = () => {
    // Add logic
    console.log('Site Button clicked!')
  }

  return (
    <ManagementTable
      title='Site Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
      onButtonClick={handleButtonClick}
    />
  )
}
