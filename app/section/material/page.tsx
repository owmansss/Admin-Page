// Material.tsx

import ManagementTable from '@/components/managementTable'
import {
  materialTableHeads as tableHeads,
  materialInputs as inputs,
  materialButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function Material() {
  return (
    <ManagementTable
      title='Material Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
    />
  )
}
