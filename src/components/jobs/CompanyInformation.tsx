// default imports
import Link from 'next/link'

interface Props {
  company: Company
}

export default function CompanyInformation({
  company
}: Props) {
  return (
    <div className='sm:col-span-3 col-span-2 my-4 text-gray-700'>
      <h3 className='text-3xl font-extrabold hover:text-indigo-600 my-2'>
        About the company
      </h3>

      <div className='p-4 bg-indigo-50 rounded-md'>
        <div className='flex flex-col'>
          <Link
            href={`/companies/${company?.id}`}
            className='text-xl font-semibold underline'>{company?.name}</Link>
          <p className='text-sm'>{company?.location}</p>
        </div>
        <p className='text-sm my-4'>{company?.description}</p>

        <h3 className='font-semibold mt-4'>Benefits of working at {company?.name}</h3>
        <p className='text-sm my-4'>{company?.benefits}</p>

        <Link
          className='text-sm hover:underline m-2 text-indigo-700 font-semibold'
          href='/'
        >
          Read More
        </Link>
      </div>
    </div>
  )
}
