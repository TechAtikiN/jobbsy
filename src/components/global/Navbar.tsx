// named imports
import { navLinks } from '@/constants/navLinks'
import { BriefcaseIcon } from '@heroicons/react/24/solid'

// default imports
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='p-4 bg-gray-50 flex justify-between items-center px-10 m-3 border border-gray-300 rounded-md'>
      <div className='flex items-center justify-start space-x-6'>
        <Link
          href='/'
          className='flex items-center text-indigo-500 group hover:cursor-pointer'>
          <BriefcaseIcon className='h-8 w-8' />
          <p className='text-xl font-bold'>jobbsy</p>
        </Link>

        <div>
          {navLinks.map((link, index) => (
            <Link href={link.path} key={index}
              className='text-gray-700 font-semibold hover:font-bold hover:text-gray-900 px-4 py-2'>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <button className='text-indigo-600 border-2 border-indigo-500 hover:border-indigo-400 text-sm uppercase px-2 py-1 hover:text-indigo-400 font-semibold rounded-md'>
        Get our newsletter
      </button>
    </nav>
  )
}

export default Navbar
