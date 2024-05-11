import { useLocation, NavLink, Outlet } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { LazyMotion, domAnimation, m } from "framer-motion";

const ProjectsRoot = () => {
  const location = useLocation();
  const isPathHasProject = location.pathname.includes("project");

  return (
    <LazyMotion features={domAnimation}>
      <main className="flex flex-col p-6 gap-y-4 sm:w-3.5 sm:flex-grow min-h-screen">
        <div className="relative flex items-center">
          <NavLink
            to=".."
            className={`absolute ${
              isPathHasProject ? "block" : "hidden"
            } flex items-center gap-1`}
          >
            <m.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="btn"
            >
              <IoChevronBackSharp />
              Back
            </m.button>
          </NavLink>
          <h2 className="w-full text-3xl text-center">Projects</h2>
        </div>

        <Outlet />
      </main>
    </LazyMotion>
  );
};

export default ProjectsRoot;
