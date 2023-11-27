// default imports
import Footer from "@/components/global/Footer"
import Navbar from "@/components/global/Navbar"

const NotFound = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="py-24">
        <h2 className='text-center text-indigo-700 text-7xl'>UH OH!</h2>
        <h1 className='text-5xl font-bold text-indigo-700 text-center'>404</h1>
        <p className='text-center text-2xl'>Page not found</p>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
