import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { projectData } from './data'

export default function ProjectSummary() {
  return (
    <div className=''>
      <h1 className='text-xl font-bold mb-4'>Project Summary</h1>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Project Created
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>3</div>
            <p className='text-xs text-muted-foreground text-green-500'>
              Last 3 Weeks
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Project Closed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>2</div>
            <p className='text-xs text-muted-foreground text-green-500'>
              Last 1 Weeks
            </p>
          </CardContent>
        </Card>{' '}
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Pending Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>1</div>
            <p className='text-xs text-muted-foreground text-green-500'>
              Last 2 Weeks
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
