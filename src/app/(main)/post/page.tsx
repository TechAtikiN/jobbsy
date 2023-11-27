// named imports
import { getCompanies } from '@/actions/companies'

// default imports
import JobPostForm from '@/components/jobs/JobPostForm'

export const revalidate = Number(process.env.CACHE_TIMEOUT) || 60

export async function JobPost() {
  const companies = await getCompanies()

  return (
    <div className='sm:px-14 px-7 py-4'>
      <JobPostForm companies={companies} />
    </div>
  )
}

export default JobPost
