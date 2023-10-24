'use client'
// named imports
import { useEffect, useState } from 'react'
import { usePageTitleStore } from '@/store/usePageTitleStore'
import { getCompanyCategories } from '@/actions/getCompanyCategories'
import { useCurrentCompanyStore } from '@/store/useCurrentCompanyStore'

const CompanyFilters = () => {
  const [company, setCompany] = useCurrentCompanyStore((state) => [state.company, state.setCompany])
  const [setTitle] = usePageTitleStore((state) => [state.setTitle])

  const [loading, setLoading] = useState(false)
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [categories, setCategories] = useState<{
    title: string
    count: number
  }[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      const categories = await getCompanyCategories()
      setCategories(categories)
      setLoading(false)
    }

    console.log(categories)
    fetchCategories()
  }, [])

  if (loading) return <p className='text-sm text-indigo-500 text-start py-5 font-medium'>Loading Companies...</p>

  return (
    <div>
      <div className='my-2'>
        {(showAllCategories ? categories : categories.slice(0, 7)).map((category, index) => (
          <div
            onClick={() => {
              setTitle('All')
              category.title === 'All' ? setCompany('All') : setCompany(`${category.title}`)
            }}
            key={index}
            className='flex items-center justify-between group hover:bg-indigo-50 font-semibold hover:cursor-pointer px-2 py-2 border-b border-gray-300'
          >
            <p className='text-gray-600 group-hover:text-indigo-500'>{category.title}</p>
            <p className='text-[9px] bg-gradient-to-br from-indigo-400 to-indigo-700 rounded-md w-16 text-center py-1 px-2 text-white'>
              {category.count}+ jobs
            </p>
          </div>
        ))}
      </div>

      <button
        className='apply-btn w-full mb-8'
        onClick={() => setShowAllCategories(!showAllCategories)}
      >
        {showAllCategories ? 'Show less companies' : 'Show all companies'}
      </button>

    </div>
  )
}

export default CompanyFilters
