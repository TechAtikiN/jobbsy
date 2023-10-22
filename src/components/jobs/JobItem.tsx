// named imports
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface Props {
  job: Job
}

const JobItem = ({ job }: Props) => {
  return (
    <div
      className='py-6 border-b hover:cursor-pointer group/item border-gray-200 group'
    >
      <Link
        href={`/jobs/${job.id}`}
      >
        {/* main section  */}
        <div className='flex items-center space-x-3'>
          <img className='rounded-full object-cover h-12 w-12' src={job.companyLogo} alt='logo' />
          <div className='flex justify-between items-start w-full'>
            <div>
              <h3 className='text-gray-700 text-2xl font-bold'>{job.company}</h3>
              <p className='text-sm text-gray-600'>{job.companyDescription}</p>
            </div>
            <button
              className='flex items-center font-bold text-gray-500 group-hover:text-indigo-600'
            >
              <div className='p-2 text-sm flex items-center space-x-1 bg-gray-100 group/edit invisible hover:bg-slate-200 group-hover/item:visible group-hover:bg-indigo-100 rounded-full'>
                <span>Details</span><ArrowUpRightIcon className='h-4 w-4' />
              </div>
            </button>
          </div>
        </div>

        {/* sub section  */}
        <div className='ml-16 mt-2 text-gray-600'>
          <p className='font-semibold text-lg hover:cursor-pointer hover:text-indigo-600'>{job.jobTitle}</p>
          <p className='text-xs text-gray-500'>{job.location}</p>

          {/* tags */}
          <div className='flex items-center my-2'>
            <p
              className='p-2 hover:cursor-pointer font-semibold rounded-sm text-xs bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700'
            >
              {job.salary}
            </p>

            <div className='space-x-4 mx-5'>
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className='p-2 hover:cursor-pointer font-semibold rounded-sm text-xs bg-green-50 text-green-600 hover:bg-green-200 hover:text-green-800'
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>
      </Link>

    </div>
  )
}

export default JobItem
