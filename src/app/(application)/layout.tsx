// named imports
import { Toaster } from '@/components/ui/toaster'

// default imports
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'

const AppLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <Navbar />

      <main className=' min-h-screen'>
        {children}
        <Toaster />
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout