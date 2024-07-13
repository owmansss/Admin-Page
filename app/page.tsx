
import ProjectSummary from './projectSummary'
import IncidentSummary from './incidentSummary'
import MaterialSummary from './materialSummary'
import RecentTask from './recentTask'

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
