// User.tsx

import ManagementTable from '@/components/managementTable'
import {
  userTableHeads as tableHeads,
  userInputs as inputs,
  userButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function User() {
  return (
    <ManagementTable
      title='User Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
    />
  )
}
