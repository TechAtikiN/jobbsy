// named imports
import { getCompanyDetails, getJobsOfCompany } from '@/actions/companies'

// default imports
import Link from 'next/link'

export const revalidate = Number(process.env.CACHE_TIMEOUT) || 60

export default async function CompanyDetails({ params: { companyId } }: { params: { companyId: string } }) {
  const company: Company = await getCompanyDetails(Number(companyId))
  const jobs = await getJobsOfCompany(Number(companyId))

  return (
    <div className='p-6 sm:max-w-5xl mx-auto px-7'>

      {/* top section */}
      <div className='flex flex-col space-y-3 border-b border-gray-300'>
        <div>
          <div className='flex space-x-3 items-end'>
            <div className='p-1 font-bold text-xl h-16 w-16 bg-indigo-400 rounded-lg'>
              <p className=' text-white text-center text-5xl pt-1'>{company?.name.charAt(0)}</p>
            </div>
            <div className='flex flex-col'>
              <h3 className='sm:text-3xl text-4xl font-semibold text-gray-700'>{company?.name}</h3>
              <p className='text-gray-700'>{company?.location}</p>
            </div>
          </div>
        </div>
        <p className='text-gray-600'>{company?.description}</p>
        <Link
          href={`${company.website}`}
          className='text-indigo-600 pb-4 font-semibold hover:underline'
        >
          {company?.website}
        </Link>
      </div>

      {/* company details */}
      <div>
        <div className='text-gray-700'>
          <h3 className='font-bold text-3xl my-3 mt-9'>About {company.name}</h3>
          <p className='text-justify pr-3'>{company?.about}</p>

          <h3 className='font-bold text-3xl my-3 mt-9'>Benefits</h3>
          <p className='text-justify pr-3'>{company?.benefits}</p>

          <h3 className='font-bold text-3xl my-3 mt-9'>Policies</h3>
          <p className='text-justify pr-3'>{company?.policies}</p>

          {jobs?.length > 0 ? (
            <div>
              <h3 className='font-bold text-3xl my-3 mt-9'>Open Jobs at {company.name}</h3>
              <hr />
              <div>
                {jobs?.map((job) => (
                  <Link className='py-3' key={job.id} href={`/jobs/${job.id}`}>
                    <p className='text-xl mt-3 text-indigo-500 font-bold'>{job.title}</p>
                    {/* tags */}
                    <div className='sm:flex items-center space-x-2 my-2 mb-4'>
                      <p
                        className='p-2 w-40 sm:w-36 hover:cursor-pointer font-semibold rounded-lg text-xs bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700'
                      >
                        {job?.salaryCompensation}
                      </p>

                      <div className='space-x-2'>
                        <span
                          className='p-2 hover:cursor-pointer font-medium rounded-lg text-xs bg-green-50 text-green-600 hover:bg-green-200 hover:text-green-800'
                        >
                          {job?.domain}
                        </span>
                      </div>
                    </div>
                    <hr className='border border-gray-200' />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className='text-gray-600'>
              <h3 className='font-bold text-3xl my-3 mt-9'>Open Jobs at {company.name}</h3>
              <p className='text-justify pr-3 text-lg font-semibold text-indigo-500'>No open jobs at this time.</p>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}
