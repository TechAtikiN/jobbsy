'use client'

// named imports
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  category: { title: string, count: number }
  selectedCategory: string
}

export default function CategoryListItem({ category, selectedCategory }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const handleCategoryClick = (category: string) => {
    if (category === 'All') {
      router.replace(pathname)
    } else {
      router.replace(`${pathname}?category=${category}`)
    }
  }

  return (
    <div onClick={() => handleCategoryClick(category.title)}
      className={`flex items-center justify-between group hover:bg-indigo-50 font-semibold 
      ${selectedCategory === category.title ? 'bg-indigo-100' : ''}
      hover:cursor-pointer px-2 py-2 border-b border-gray-300`}
    >
      <p className='text-gray-600 group-hover:text-indigo-500'>{category.title}</p>
      <p className='text-[9px] bg-gradient-to-br from-indigo-400 to-indigo-700 rounded-md w-16 text-center py-1 px-2 text-white'>
        {category.count}+ jobs
      </p>
    </div>
  )
}
