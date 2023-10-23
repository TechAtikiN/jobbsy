// named imports
import { Toaster } from '@/components/ui/toaster'

// default imports
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'

export const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE) || 60

const AppLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <Navbar />

      <main className='max-w-screen-2xl mx-auto min-h-screen'>
        {children}
        <Toaster />
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout