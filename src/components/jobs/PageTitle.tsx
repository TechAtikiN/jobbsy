'use client'

// named imports
import { usePageTitleStore } from '@/store/usePageTitleStore'

const PageTitle = () => {
  const title = usePageTitleStore((state) => state.title)

  return (
    <>
      <h2
        className='text-center h-40 font-serif font-bold mx-auto text-5xl px-10 py-6 text-transparent bg-clip-text bg-gradient-to-r w-2/3 leading-[1.15] from-blue-300 via-indigo-500 to-sky-900'
      >
        {title}
      </h2>
    </>
  )
}

export default PageTitle