import { useLocation, NavLink, Outlet } from "react-router-dom"
import { IoChevronBackSharp } from "react-icons/io5";

const ProjectsRoot = () => {
    const location = useLocation()
    const isPathHasProject = location.pathname.includes('project')

    return (
    <main className="flex flex-col p-6 gap-y-4 sm:w-3.5 sm:flex-grow min-h-screen">
        <div className="relative flex items-center">
            <NavLink to=".." className={`absolute ${ isPathHasProject ? 'block' : 'hidden' } flex items-center gap-1`}><IoChevronBackSharp />Back</NavLink>
            <h2 className="w-full text-3xl text-center">Projects</h2>
        </div>
        <Outlet />
    </main>
    )
}

export default ProjectsRoot;