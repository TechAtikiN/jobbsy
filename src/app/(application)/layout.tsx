// default imports
import Navbar from '@/components/globals/Navbar'

const AppLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <Navbar />

      <main>
        {children}
      </main>
    </div>
  )
}

export default AppLayout