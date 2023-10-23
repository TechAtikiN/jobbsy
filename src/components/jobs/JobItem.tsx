// named imports
import { ChevronRightIcon } from '@heroicons/react/24/solid'

// default imports
import Link from 'next/link'

interface Props {
  job: Job
}

const tempImages = [
  'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=1912&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1532210317995-cc56d90177d9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1528460033278-a6ba57020470?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1667761634654-7fcf176434b8?auto=format&fit=crop&q=80&w=2037&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

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
          <img
            className='rounded-full object-cover h-12 w-12'
            src={tempImages[Math.floor(Math.random() * tempImages.length)]}
            alt='logo'
          />
          <div className='flex justify-between items-start w-full'>
            <div>
              <p className='text-gray-700 text-2xl font-bold'>{job.title}</p>
              <p className='text-sm text-gray-600'>{job.location}</p>
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
        <div className='ml-[3.8rem] mt-2 text-gray-600'>
          <h3 className=' font-semibold text-lg hover:cursor-pointer hover:text-indigo-600'>{job?.company?.name}</h3>
          <p className='text-xs text-gray-500'>{job?.company?.description.split('.')[0]}</p>

          {/* tags */}
          <div className='sm:flex items-center hidden space-x-2 my-2'>
            <p
              className='p-2 hover:cursor-pointer font-semibold rounded-lg text-xs bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700'
            >
              {job?.salaryCompensation}
            </p>

            <div className='space-x-2'>
              {/* {job?.skills.map((skill) => ( */}
              <span
                // key={skill}
                className='p-2 hover:cursor-pointer font-medium rounded-lg text-xs bg-green-50 text-green-600 hover:bg-green-200 hover:text-green-800'
              >
                {job?.domain}
              </span>
              {/* ))} */}
            </div>

          </div>
        </div>
      </Link>

    </div>
  )
}

export default JobItem
