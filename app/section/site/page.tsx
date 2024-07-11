// Site.tsx

import ManagementTable from '@/components/managementTable'
import {
  siteTableHeads as tableHeads,
  siteInputs as inputs,
  siteButtonNames as buttonNames,
} from '../constant'
import { tableData } from './data'

export default function Site() {
  return (
    <ManagementTable
      title='Site Management'
      inputs={inputs}
      tableHeads={tableHeads}
      tableData={tableData}
      buttonNames={buttonNames}
    />
  )
}
