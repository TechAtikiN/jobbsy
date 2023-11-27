// named imports
import { getCompanies } from '@/actions/companies'

// default imports
import Link from 'next/link'

export default async function CompaniesPage() {
  const companies = await getCompanies()

  return (
    <div>
      <h2
        className='text-center sm:h-40 font-serif font-bold mx-auto text-4xl sm:text-5xl p-2 pt-2 pb-4 sm:px-10 sm:py-6 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r sm:w-2/3 leading-[1.15] from-blue-300 via-indigo-500 to-sky-900'
      >
        One step closer to your dream company
      </h2>

      <div className='m-4 grid grid-cols-2 gap-5'>
        {companies?.map((company) => (
          <Link
            href={`/companies/${company?.id}`}
            key={company?.id}
            className='flex justify-between items-center space-x-5 p-3 border border-indigo-300 bg-indigo-50 rounded-lg hover:bg-indigo-100'
          >
            <div className='w-1/5'>
              <div className='p-1 font-bold text-xl h-24 w-24 bg-indigo-400 rounded-lg'>
                <p className=' text-white text-center text-5xl pt-4'>{company?.name.charAt(0)}</p>
              </div>
            </div>
            <div className='flex flex-col space-y-1'>
              <p className='text-gray-700 text-xl font-bold'>{company?.name}</p>
              <p className='text-sm text-gray-600'>
                {company?.description?.slice(0, 100) + '...'}
              </p>
              <Link
                href={`${company.website}`}
                className='text-indigo-600 font-semibold text-sm hover:underline'
              >
                {company?.website}
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
