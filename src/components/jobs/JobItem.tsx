// named imports
import { ChevronRightIcon } from '@heroicons/react/24/solid'

// default imports
import Link from 'next/link'

interface Props {
  job: JobDetails
}

const JobItem = ({ job }: Props) => {
  return (
    <div
      className='py-6 border-b hover:cursor-pointer group/item border-gray-200 group'
    >
      <Link
        href={`/jobs/${job?.id}`}
      >
        {/* main section  */}
        <div className='flex items-start space-x-2'>
          <div className='p-1 font-bold text-xl h-12 w-12 bg-indigo-50 rounded-md'>
            <p className=' text-indigo-700 text-center pt-1'>{job?.company?.name.charAt(0)}</p>
          </div>

          <div className='flex justify-between items-start w-full'>
            <div>
              <p className='text-gray-700 text-2xl font-bold'>{job?.title}</p>
              <p className='text-sm text-gray-600'>{job?.location}</p>
            </div>
            <button
              className='flex items-center font-bold text-gray-500 group-hover:text-indigo-600'
            >
              <div className='p-2 text-sm bg-gray-100 group/edit invisible hover:bg-slate-200 group-hover/item:visible group-hover:bg-indigo-100 rounded-full'>
                <ChevronRightIcon className='h-4 w-4' />
              </div>
            </button>
          </div>
        </div>

        {/* sub section  */}
        <div className='ml-[3.3rem] mt-2 text-gray-600'>
          <h3 className=' font-semibold text-lg hover:cursor-pointer hover:text-indigo-600'>{job?.company?.name}</h3>
          <p className='text-xs text-gray-500'>{job?.company?.description?.split('.')[0]}</p>

          {/* tags */}
          <div className='sm:flex items-center hidden space-x-2 my-2'>
            <p
              className='p-2 hover:cursor-pointer font-semibold rounded-lg text-xs bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700'
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
        </div>
      </Link>

    </div>
  )
}

export default JobItem
