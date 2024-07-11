'use client'


import RegForm from '@/components/ui/regForm'
import { tableHeads, inputs, tableData, buttonNames } from './data'

export default function User() {
  return (
    <RegForm
      title='User Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
    />
  )
}
