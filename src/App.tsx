import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Testimonials from "./components/Testimonials"
import Header from "./components/Header"

export default function App() {
  return (
    <div className="flex flex-col sm:flex-wrap sm:flex-row bg-base-200">
        <Navbar />
        <Header />
        <p className="w-full p-4 mt-8 text-3xl text-center">Testimonials</p>
        <Testimonials />
        <Sidebar />
        <MainContent />
        <Footer />
    </div>
  )
}