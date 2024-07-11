'use client'

import { useState } from 'react'
import ManagementTable from '@/components/managementTable'
import RegForm from './regForm'
import {
  incidentTableHeads as tableHeads,
  incidentInputs as inputs,
  incidentButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function Incident() {
  const [showRegForm, setShowRegForm] = useState(false)

  const handleButtonClick = (id: string) => {
    if (id === 'sectionButton1') {
      setShowRegForm(true)
    }
    console.log(`Button with id ${id} clicked! Implement your logic here.`)
  }

  return (
    <>
      {showRegForm ? (
        <RegForm title='Add Incident' buttonNames={buttonNames} />
      ) : (
        <ManagementTable
          title='Incident Management'
          inputs={inputs}
          tableHeads={tableHeads}
          tableData={tableData}
          buttonNames={buttonNames}
          onButtonClick={handleButtonClick}
        />
      )}
    </>
  )
}
