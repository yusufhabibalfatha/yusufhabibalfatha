import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import MainOther from "./components/MainOther"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Testimonials from "./components/Testimonials"
import Header from "./components/Header"
import About from "./components/About"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom"
import { RouterProvider } from 'react-router-dom'

export const Root = () => {
    return (
        <Outlet />
    )
}
export const MainRoot = () => {
    return (
    <main className="flex flex-col p-6 gap-y-4 sm:w-3.5 sm:flex-grow">
        <h2 className="text-3xl text-center">Projects</h2>
        <Outlet />
    </main>
    )
}

export const Home = () => {
    return (
        <div className="flex flex-col sm:flex-wrap sm:flex-row bg-base-200">
            <Navbar />
            <Header />
            <p className="w-full p-4 mt-8 text-3xl text-center">Testimonials</p>
            <Testimonials />
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    );
}


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Root />}>
            <Route element={<Home />} >
                <Route element={<MainRoot />}>
                    <Route path="/" element={<MainContent />}/>
                    <Route path="other" element={<MainOther />}/>
                </Route>
            </Route>
            <Route path="about" element={<About />} />
        </Route>
    )
)

export default function App() {
  return (
    <RouterProvider router={routes}/>
  )
}


 