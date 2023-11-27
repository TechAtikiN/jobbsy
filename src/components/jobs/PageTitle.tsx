'use client'

// named imports
import { usePageTitleStore } from '@/store/usePageTitleStore'

interface Props {
  category: string
  company: string
}

const PageTitle = ({
  category,
  company
}: Props) => {
  const title = usePageTitleStore((state) => state.title)

  return (
    <h2
      className='text-center sm:h-40 font-serif font-bold mx-auto text-4xl sm:text-5xl p-2 pt-2 pb-4 sm:px-10 sm:py-6 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r sm:w-2/3 leading-[1.15] from-blue-300 via-indigo-500 to-sky-900'
    >
      {category && company ? `Jobs in ${category} at ${company}` :
        category ? `Jobs in ${category}` :
          company ? `Jobs at ${company}` :
            title
      }
    </h2>
  )
}

export default PageTitle