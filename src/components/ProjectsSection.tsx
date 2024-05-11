import { NavLink, useOutletContext } from "react-router-dom";
import { m } from "framer-motion";
import projects from "../assets/projects.json";
import { IoChevronForward } from "react-icons/io5";

const ProjectsSection = () => {
  const axisTitleProject = useOutletContext<HTMLHeadingElement>();
  const scrollToTopProjects = () => {
    setTimeout(() => {
      axisTitleProject.scrollIntoView(true);
    }, 200);
    // console.log("a ", axisTitleProject.scrollHeight);
    // window.scrollTo(36, 36);
  };
  return (
    <m.div
      className="flex flex-col min-h-screen gap-3"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      {projects.map((project) => (
        <div
          className="flex flex-col gap-4 p-6 whitespace-pre-wrap bg-base-300 rounded-xl"
          key={project.id}
        >
          <h2 className="text-xl font-bold">{project.title}</h2>
          <div className="flex flex-wrap gap-2">
            <p className="flex justify-between w-1/5">
              Client<span>:</span>
            </p>
            <p className="w-9/12">{project.client}</p>
            <p className="flex justify-between w-1/5">
              Role<span>:</span>
            </p>
            <p className="w-9/12">{project.role.map((role) => `${role},`)}</p>
            <p className="flex justify-between w-1/5">
              Result<span>:</span>
            </p>
            <p className="w-9/12">{project.result}</p>
          </div>
          <NavLink
            to={`project/${project.id}`}
            className="rounded-md w-fit btn btn-primary"
            onClick={scrollToTopProjects}
          >
            Details <IoChevronForward />
          </NavLink>
        </div>
      ))}
    </m.div>
  );
};

export default ProjectsSection;
