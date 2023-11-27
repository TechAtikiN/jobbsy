'use client'

// named imports
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  company: { title: string, count: number }
  selectedCompany: string
  selectedCategory: string
}

export default function CompanyListItem({ company, selectedCompany, selectedCategory }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const handleCompanyClick = (company: string) => {
    if (company === 'All') {
      router.replace(pathname)
    } else {
      selectedCategory ? router.replace(`${pathname}?category=${selectedCategory}&company=${company}`) : router.replace(`${pathname}?company=${company}`)
    }
  }

  return (
    <div onClick={() => handleCompanyClick(company.title)}
      className={`flex items-center justify-between group hover:bg-indigo-50 font-semibold 
      ${selectedCompany === company.title ? 'bg-indigo-100' : ''}
      hover:cursor-pointer px-2 py-2 border-b border-gray-300`}
    >
      <p className='text-gray-600 group-hover:text-indigo-500'>{company.title}</p>
      <p className='text-[9px] bg-gradient-to-br from-indigo-400 to-indigo-700 rounded-md w-16 text-center py-1 px-2 text-white'>
        {company.count}+ jobs
      </p>
    </div>
  )
}
