'use client'
// default imports
import { usePageTitleStore } from '@/store/usePageTitleStore'
import JobItem from './JobItem'
import { getCategoryJobs } from '@/actions/jobs'
import { useEffect, useState } from 'react'
import { toast, useToast } from '@/hooks/useToast'
import { useCurrentCompanyStore } from '@/store/useCurrentCompanyStore'
import { getCompanyCategories } from '@/actions/companies'
import { getCompanyCategoryJobs } from '@/actions/companies'

interface Props {
  jobs: JobDetails[]
}

const JobListing = ({ jobs }: Props) => {
  const { toast } = useToast()
  const [title] = usePageTitleStore((state) => [state.title])
  const [company] = useCurrentCompanyStore((state) => [state.company])

  const [loading, setLoading] = useState(false)
  const [categoryJobsList, setCategoryJobsList] = useState<JobDetails[]>([])

  useEffect(() => {
    const fetchCategoryJobs = async () => {
      setLoading(true)
      const categoryJobs: JobDetails[] = await getCategoryJobs(title)
      setCategoryJobsList(categoryJobs)
      setLoading(false)
    }

    fetchCategoryJobs()
  }, [title])

  useEffect(() => {
    const fetchCompanyJobs = async () => {
      setLoading(true)
      const companyJobs: JobDetails[] = await getCompanyCategoryJobs(company)
      setCategoryJobsList(companyJobs)
      setLoading(false)
    }

    fetchCompanyJobs()
  }, [company])

  if (loading) return <p className='text-sm text-indigo-500 text-start py-5 font-medium'>Loading Jobs...</p>

  return (
    <div>
      <div className='border-b border-gray-300 py-3'>
        <h3 className='text-gray-600 font-bold text-2xl'>
          {(title === 'Global connections and opportunities, endless' || company === 'All') ? `${jobs.length} New jobs` :
            categoryJobsList.length > 0 ? `${categoryJobsList.length} jobs` : 'No jobs found for this category'}
        </h3>
        <p className='text-xs text-gray-600 mb-3'>
          Browse through all the new jobs that have been posted recently
        </p>
      </div>

      <div className='mb-10'>
        {((title === ('Global connections and opportunities, endless' || 'All') || company === 'All') ?
          jobs : categoryJobsList).map((job: JobDetails) => (
            <JobItem
              key={job?.id}
              job={job}
            />
          ))
        }

      </div>
    </div>
  )
}

export default JobListing