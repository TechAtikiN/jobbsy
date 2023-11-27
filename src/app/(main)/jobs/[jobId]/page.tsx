// named imports
import { getJobDetails } from '@/actions/jobs'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'

// default imports
import JobApplicationForm from '@/components/jobs/JobApplicationForm'
import Loader from '@/components/ui/loader'
import HiringProcessList from '@/components/jobs/HiringProcessList'
import CompanyInformation from '@/components/jobs/CompanyInformation'

export async function JobDetails({ params: { jobId } }: { params: { jobId: string } }) {
  const jobDetails: JobDetails = await getJobDetails(Number(jobId))

  if (!jobDetails) return <Loader />

  return (
    <div className='p-6 sm:px-14 px-7'>

      {/* top details section */}
      <div className='border-b border-gray-300'>

        <div className='sm:flex justify-between items-center'>
          <h3 className='sm:text-4xl text-3xl font-semibold text-gray-700'>{jobDetails?.title}</h3>
          {/* job application form  */}
          <Sheet>
            <SheetTrigger asChild>
              <button className='apply-btn hidden sm:block'>
                Apply for this position
              </button>
            </SheetTrigger>
            <JobApplicationForm jobId={jobDetails?.id!} company={jobDetails?.company?.name!} jobTitle={jobDetails?.title!} />
          </Sheet>
        </div>

        {/* job description  */}
        <div className='my-4'>
          <div className='my-3'>
            <p className='font-semibold text-lg text-gray-700'>{jobDetails?.company?.name}</p>
          </div>

          <div className='flex justify-start items-center space-x-10'>
            <p className="font-normal text-gray-500">📌{jobDetails?.location}</p>
            <p className="font-normal text-gray-500">💵{jobDetails?.salaryCompensation}</p>
            <p className="font-normal text-gray-500">🔮 {jobDetails?.yearsOfExperience}years&nbsp;of experience</p>
          </div>
        </div>
      </div>

      {/* job details section */}
      <div className='grid sm:grid-cols-10 grid-cols-2 gap-x-8'>
        <div className='sm:col-span-7 col-span-2 my-4 flex flex-col'>

          <div className='text-gray-700'>
            <h2 className='text-3xl font-extrabold hover:text-indigo-600 my-2'>Job Details</h2>
            <p className='text-justify pr-3'>{jobDetails?.description}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Day in your life!</h3>
            <p className='text-justify pr-3'>{jobDetails?.dayInLife}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Roles and Responsibilities</h3>
            <p className='text-justify pr-3'>{jobDetails?.rolesResponsibilities}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Skillset</h3>
            <p className='text-justify pr-3'>{jobDetails?.skillset}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Compensation</h3>
            <p className='text-justify pr-3'>{jobDetails?.compensation}</p>

            <HiringProcessList />
          </div>

          {/* Job application form  */}
          <Sheet>
            <SheetTrigger asChild>
              <button className='apply-btn w-full text-center'>
                Apply for this position
              </button>
            </SheetTrigger>
            <JobApplicationForm jobId={jobDetails?.id!} company={jobDetails?.company?.name!} jobTitle={jobDetails?.title!} />
          </Sheet>
        </div>
        <CompanyInformation company={jobDetails?.company!} />
      </div>
    </div >
  )
}

export default JobDetails