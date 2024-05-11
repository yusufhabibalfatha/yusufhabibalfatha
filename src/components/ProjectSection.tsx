import { useParams } from "react-router-dom";
import projects from "../assets/projects.json";
import { m } from "framer-motion";

const ProjectSection = () => {
  const { projectID } = useParams<Record<string, string | undefined>>();
  const theProject = projects.filter(
    (project) => project.id.toString() === projectID
  )[0];

  return (
    <m.div
      className="flex flex-col min-h-screen gap-4 p-6 text-center bg-base-300"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <h2 className="text-3xl">{theProject.title}</h2>
      <p>{theProject.result}</p>
      <p>{theProject.client}</p>
    </m.div>
  );
};

export default ProjectSection;
