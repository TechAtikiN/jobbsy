'use client'
// named imports
import { useState } from 'react'
import { usePageTitleStore } from '@/store/usePageTitleStore'
import { categories } from '@/constants/jobs'

const CategoryListing = () => {
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [setTitle] = usePageTitleStore((state) => [state.setTitle])

  return (
    <div>
      <div className='my-2'>
        {(showAllCategories ? categories : categories.slice(0, 7)).map((category, index) => (
          <div
            onClick={() => {
              category.title === 'All' ? setTitle('Connecting you to jobs on a global scale') : setTitle(`${category.title} jobs`)
            }}
            key={index}
            className='flex items-center justify-between group hover:bg-indigo-50 font-semibold hover:cursor-pointer px-2 py-2 border-b border-gray-300'
          >
            <p className='text-gray-600 group-hover:text-indigo-500'>{category.title}</p>
            <p className='text-[9px] bg-indigo-500 text-white rounded-full p-1'>{category.count}</p>
          </div>
        ))}
      </div>

      <button
        className='bg-indigo-500 font-semibold my-2 text-white px-3 py-2 rounded-md w-full'
        onClick={() => setShowAllCategories(!showAllCategories)}
      >
        {showAllCategories ? 'Show less categories' : 'Show all categories'}
      </button>

    </div>
  )
}

export default CategoryListing
