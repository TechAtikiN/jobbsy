// named imports
import { Suspense } from 'react'
import { getAllJobs } from '@/actions/jobs/jobs'

// default imports
import PageTitle from '@/components/jobs/PageTitle'
import CategoryListing from '@/components/jobs/CategoryListing'
import JobListing from '@/components/jobs/JobListing'
import Loader from '@/components/ui/loader'
import CompanyFilters from '@/components/jobs/CompanyFilters'

export default async function Home() {
  const jobs = await getAllJobs()

  return (
    <div className='px-8'>
      <PageTitle />

      <div className='grid sm:grid-cols-10 sm:mx-6 gap-x-8'>
        <div className='col-span-7'>

          {/* job listing */}
          <Suspense
            fallback={
              <div className='flex justify-center items-center h-screen'>
                <Loader />
              </div>
            }
          >
            <JobListing jobs={jobs} />
          </Suspense>
        </div>

        {/* job filters */}
        <div className='col-span-3 hidden sm:block'>
          <h3 className='text-gray-600 font-bold text-2xl'>Search by Category</h3>

          <CategoryListing />

          <h3 className='text-gray-600 font-bold text-2xl mt-7'>Search by Company</h3>
          <CompanyFilters />
        </div>
      </div>
    </div>
  )
}
