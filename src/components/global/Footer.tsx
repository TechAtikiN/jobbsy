// named imports
import { BriefcaseIcon } from '@heroicons/react/24/solid'

// default imports
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-slate-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>

        <div className='md:flex md:justify-between px-12'>
          <div className='mb-6 md:mb-0 flex flex-col space-y-4'>
            <Link
              href='/'
              className='flex items-center text-indigo-300 group hover:cursor-pointer'>
              <BriefcaseIcon className='h-8 w-8' />
              <p className='text-xl font-bold'>jobbsy</p>
            </Link>

            <div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
              <Link href='#' className='text-gray-400 hover:text-gray-900'>
                <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 8 19'>
                  <path fill-rule='evenodd' d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z' clip-rule='evenodd' />
                </svg>
                <span className='sr-only'>Facebook page</span>
              </Link>
              <Link href='#' className='text-gray-400 hover:text-gray-900'>
                <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 21 16'>
                  <path d='M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z' />
                </svg>
                <span className='sr-only'>Discord community</span>
              </Link>
              <Link href='#' className='text-gray-400 hover:text-gray-900'>
                <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 17'>
                  <path fill-rule='evenodd' d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z' clip-rule='evenodd' />
                </svg>
                <span className='sr-only'>Twitter page</span>
              </Link>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-10'>
            <div className=''>
              <h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase'>Resources</h2>
              <ul className='text-gray-500 space-y-3 font-medium'>
                <li className=''>
                  <Link href='/' className='hover:underline'>Jobs</Link>
                </li>
                <li>
                  <Link href='/companies' className='hover:underline'>Companies</Link>
                </li>
                <li>
                  <Link href='/post' className='hover:underline'>Post a Job</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase '>Contact</h2>
              <ul className='text-gray-500 space-y-3 font-medium'>
                <li className=''>
                  <Link href='/about' className='hover:underline'>About</Link>
                </li>
                <li>
                  <p className='hover:underline hover:cursor-pointer'>Newsletter</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className='my-6 border-gray-200 sm:mx-auto 700 lg:my-8' />
        <p className='text-sm text-center text-gray-500 sm:text-center'>
          © 2023 <Link href='/' className='hover:underline'>Jobbsy</Link>. All Rights Reserved.
        </p>

      </div>
    </footer>

  )

}

export default Footer
