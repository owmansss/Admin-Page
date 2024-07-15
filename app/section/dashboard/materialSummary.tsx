import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MaterialSummary() {
  return (
    <div className='w-1/3'>
      <h1 className='text-xl font-bold mb-4'>Material Summary</h1>
      <div className='flex flex-col gap-10'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Material Available
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
              Material Out
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>1</div>
            <p className='text-xs text-muted-foreground text-green-500'>
              Last 3 Weeks
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
