import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import MainOther from "./components/MainOther"
import Sidebar from "./components/Sidebar"
import Testimonials from "./components/Testimonials"
import Header from "./components/Header"
import About from "./components/About"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, useLocation, NavLink } from "react-router-dom"
import { RouterProvider } from 'react-router-dom'

import AppRoot from "./layouts/app-root"
import ProjectsRoot from "./layouts/projects-root"

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
        <Route element={<AppRoot />}>
            <Route element={<Home />} >
                <Route element={<ProjectsRoot />}>
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


 