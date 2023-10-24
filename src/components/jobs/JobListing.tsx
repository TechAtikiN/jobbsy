'use client'
// default imports
import { usePageTitleStore } from '@/store/usePageTitleStore'
import JobItem from './JobItem'
import { getCategoryJobs } from '@/actions/getCategoryJobs'
import { useEffect, useState } from 'react'
import { toast, useToast } from '@/hooks/useToast'
import { useCurrentCompanyStore } from '@/store/useCurrentCompanyStore'

interface Props {
  jobs: JobDetails[]
}

const JobListing = ({ jobs }: Props) => {
  const { toast } = useToast()
  const [title] = usePageTitleStore((state) => [state.title])
  const [company] = useCurrentCompanyStore((state) => [state.company])
  const [categoryJobsList, setCategoryJobsList] = useState<JobDetails[]>([])
  const [companyJobsList, setCompanyJobsList] = useState<JobDetails[]>([])


  useEffect(() => {
    const fetchCategoryJobs = async () => {
      const categoryJobs: JobDetails[] = await getCategoryJobs(title)
      setCategoryJobsList(categoryJobs)
    }

    const fetchCompanyJobs = async () => {
      const companyJobs: JobDetails[] = await getCategoryJobs(company)
      setCompanyJobsList(companyJobs)
    }
    fetchCompanyJobs()
    fetchCategoryJobs()
  }, [title, company])

  return (
    <div>
      <div className='border-b border-gray-300 py-3'>
        <h3 className='text-gray-600 font-bold text-2xl'>
          {title === 'Global connections and opportunities, endless' ? `${jobs.length} New jobs` :
            categoryJobsList.length > 0 ? `${categoryJobsList.length} jobs` : 'No jobs found for this category'}
        </h3>
        <p className='text-xs text-gray-600 mb-3'>
          Browse through all the new jobs that have been posted recently
        </p>
      </div>

      <div className='mb-10'>
        {(title === 'Global connections and opportunities, endless' || title === 'All' || company === 'All' ? jobs : categoryJobsList.length > 0 ? categoryJobsList
          : companyJobsList.length > 0 ? companyJobsList : []
        ).map((job) => (
          <JobItem key={job?.id} job={job} />
        )
        )}
      </div>
    </div>
  )
}

export default JobListing