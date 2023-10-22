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
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout