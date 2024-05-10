import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import MainOther from "./components/MainOther"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Testimonials from "./components/Testimonials"
import Header from "./components/Header"
import About from "./components/About"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, useLocation, NavLink } from "react-router-dom"
import { RouterProvider } from 'react-router-dom'

export const Root = () => {
    return (
    <div className="flex flex-col sm:flex-wrap sm:flex-row bg-base-200">
        <Navbar />
        <Outlet />
    </div>
    )
}
export const MainRoot = () => {
    const location = useLocation()
    let a = location.pathname.includes('project')
    return (
    <main className="flex flex-col p-6 gap-y-4 sm:w-3.5 sm:flex-grow">
        <div className="relative flex items-center">
            <NavLink to=".." className={`absolute ${a ? 'block' : 'hidden'}`}>Back</NavLink>
            <h2 className="w-full text-3xl text-center">
                Projects
            </h2>
        </div>
        <Outlet />
    </main>
    )
}

export const Home = () => {
    return (
        <>
            <Header />
            <p className="w-full p-4 mt-8 text-3xl text-center">Testimonials</p>
            <Testimonials />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    );
}


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Root />}>
            <Route element={<Home />} >
                <Route element={<MainRoot />}>
                    <Route path="/" element={<MainContent />}/>
                    <Route path="project/:projectID" element={<MainOther />}/>
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


 