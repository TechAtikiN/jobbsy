// default imports
import JobPostForm from '@/components/jobs/JobPostForm'

export const revalidate = Number(process.env.CACHE_TIMEOUT) || 60

const JobPost = () => {

  return (
    <div className='sm:px-14 px-7 py-4'>
      <JobPostForm />
    </div>
  )
}

export default JobPost
