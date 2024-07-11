// Project.tsx

import ManagementTable from '@/components/managementTable'
import {
  projectTableHeads as tableHeads,
  projectInputs as inputs,
  projectButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function Project() {
  return (
    <ManagementTable
      title='Project Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
    />
  )
}
