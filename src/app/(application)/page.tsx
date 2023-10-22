// named imports
import { jobs } from '@/constants/jobs'

// default imports
import JobItem from '@/components/jobs/JobItem'
import PageTitle from '@/components/jobs/PageTitle'
import CategoryListing from '@/components/jobs/CategoryListing'

export default function Home() {
  return (
    <div className='px-8'>
      <PageTitle />

      <div className='grid grid-cols-10 mx-6 gap-x-8'>
        <div className='col-span-7'>

          <div className='border-b border-gray-300 py-3'>
            <h3 className='text-gray-600 font-bold text-2xl'>89 New jobs</h3>
            <p className='text-xs text-gray-600 mb-3'>Last updated on October 22 2023</p>
          </div>

          {/* job listing */}
          <div className='mb-10'>
            {jobs.map((job) => (
              <JobItem key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* job filters */}
        <div className='col-span-3'>
          <h3 className='text-gray-600 font-bold text-2xl'>Search by category</h3>

          <CategoryListing />
        </div>
      </div>

      {/* <Newsletter/> */}

    </div>
  )
}
