// Incident.tsx

import ManagementTable from '@/components/managementTable'
import {
  incidentTableHeads as tableHeads,
  incidentInputs as inputs,
  incidentButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function Incident() {
  return (
    <ManagementTable
      title='Incident Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
    />
  )
}
