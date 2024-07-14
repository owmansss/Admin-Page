
import ProjectSummary from './dashboard/projectSummary'
import IncidentSummary from './dashboard/incidentSummary'
import MaterialSummary from './dashboard/materialSummary'
import RecentTask from './dashboard/recentTask'

export default function Dashboard() {
  return (
    <section className='w-full h-screen flex flex-col ml-12 gap-5'>
      <div className='w-full h-1/6'></div>
      <ProjectSummary />
      <IncidentSummary />
      <div className='w-full h-full flex gap-10'>
        <MaterialSummary />
        <RecentTask />
      </div>
    </section>
  )
}
