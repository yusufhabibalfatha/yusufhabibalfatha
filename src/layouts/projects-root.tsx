import { Outlet } from "react-router-dom";

const ProjectsRoot = () => {
  //   const axisTitleProject: MutableRefObject<HTMLHeadingElement | null> =
  //     useRef(null);

  return (
    <main className="flex flex-col p-6 gap-y-4 sm:w-3.5 sm:flex-grow min-h-screen">
      <div className="relative flex items-center">
        <h2 className="w-full text-3xl text-center scroll-mt-20">Projects</h2>
      </div>
      <Outlet />
    </main>
  );
};

export default ProjectsRoot;
