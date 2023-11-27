// named imports
import { Toaster } from '@/components/ui/toaster'
import { ErrorBoundary } from 'react-error-boundary'

// default imports
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import Error from './error'

export const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE) || 60

const AppLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <Navbar />
      <ErrorBoundary fallback={<Error />}>
        <main className='max-w-screen-2xl mx-auto min-h-screen'>
          {children}
          <Toaster />
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default AppLayout