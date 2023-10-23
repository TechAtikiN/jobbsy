'use client'
// named imports
import { useState } from 'react'
import { mobileNavLinks, navLinks } from '@/constants/navLinks'
import { Bars3Icon, BriefcaseIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Dialog, DialogTrigger } from '../ui/dialog'

// default imports
import Link from 'next/link'
import NewsLetterForm from './NewsLetterForm'

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false)

  const handleShowNav = (event: any) => {
    event.preventDefault()
    setShowNav(showNav => !showNav)
  }

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <nav className='p-4 bg-slate-100 hidden sm:flex justify-between items-center px-10 m-3 border border-gray-300 rounded-lg'>
        <div className='flex items-center justify-start space-x-6'>
          <Link
            href='/'
            className='flex items-center space-x-2 text-indigo-500 group hover:cursor-pointer'>
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

        <div className='flex items-center space-x-5'>
          <Link
            href='/post'
            className='text-gray-700 font-bold hover:font-bold hover:text-gray-900 px-4 py-2'>Post a job</Link>

          <Dialog>
            <DialogTrigger asChild>
              <button className='text-indigo-600 border-2 w-52 border-indigo-500 hover:border-indigo-400 text-sm uppercase px-3 py-2 hover:text-indigo-500 font-semibold rounded-md'>
                Get our newsletter
              </button>
            </DialogTrigger>
            <NewsLetterForm />
          </Dialog>
        </div>


      </nav>

      <nav className=''>
        <div className='sm:hidden flex justify-between p-4 bg-slate-100 items-center px-4 m-3 border border-gray-300 rounded-lg'>

          <Link
            href='/'
            className='flex items-center space-x-2 text-indigo-500 group hover:cursor-pointer'>
            <BriefcaseIcon className='h-8 w-8' />
            <p className='text-xl font-bold'>jobbsy</p>
          </Link>

          <button className='lg:hidden md:block p-2 flex space-x-3' onClick={handleShowNav}>
            {showNav ? (
              <XMarkIcon className='w-8 h-8 bg-indigo-100 rounded-md p-1' />
            ) : (
              <Bars3Icon className='w-8 h-8 bg-indigo-100 rounded-md p-1' />
            )}
          </button>
        </div>

        {showNav && (
          <div
            className='px-2 lg:hidden md:block py-3'>
            <ul className='flex flex-col space-y-3 text-base text-gray-700 font-medium'>
              {mobileNavLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className='border-b border-gray-300 mx-5 py-1 text-right'
                >
                  <span className=''>{link.name}</span>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </nav>

    </div>
  )
}

export default Navbar
