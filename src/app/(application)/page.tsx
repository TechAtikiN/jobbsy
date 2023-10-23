// named imports
import { getAllJobs } from '@/actions/getAllJobs'

// default imports
import JobItem from '@/components/jobs/JobItem'
import PageTitle from '@/components/jobs/PageTitle'
import CategoryListing from '@/components/jobs/CategoryListing'
import { usePageTitleStore } from '@/store/usePageTitleStore'
import JobListing from '@/components/jobs/JobListing'

export default async function Home() {
  const jobs = await getAllJobs()

  return (
    <div className='px-8'>
      <PageTitle />

      <div className='grid sm:grid-cols-10 sm:mx-6 gap-x-8'>
        <div className='col-span-7'>

          {/* job listing */}
          <JobListing jobs={jobs} />
        </div>

        {/* job filters */}
        <div className='col-span-3 hidden sm:block'>
          <h3 className='text-gray-600 font-bold text-2xl'>Search by category</h3>

          <CategoryListing />
        </div>
      </div>

    </div>
  )
}
