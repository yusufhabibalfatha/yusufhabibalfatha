import { useParams } from "react-router-dom";
import projects from "../assets/projects.json"

const ProjectSection = () => {
    const { projectID } = useParams<Record<string, string | undefined>>()
    const theProject = projects.filter(project => project.id.toString() === projectID)[0]

    return (
        <div className="flex flex-col min-h-screen gap-4 p-6 text-center bg-base-300">
            <h2 className="text-3xl">{theProject.title}</h2>
            <p>{theProject.result}</p>
            <p>{theProject.client}</p>
        </div>
    );
}
 
export default ProjectSection;