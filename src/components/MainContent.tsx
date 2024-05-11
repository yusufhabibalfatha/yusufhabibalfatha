import { NavLink } from "react-router-dom";
import projects from "./../assets/projects.json"

const MainContent = () => {
    return (
        <>
            {projects.map(project => (
                <div className="flex flex-col gap-4 p-6 whitespace-pre-wrap bg-base-300 rounded-xl" key={project.id}>
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <div className="flex flex-wrap gap-2">
                        <p className="flex justify-between w-1/5">Client<span>:</span></p>
                        <p className="w-9/12">{project.client}</p>
                        <p className="flex justify-between w-1/5">Role<span>:</span></p>
                        <p className="w-9/12">{project.role.map(role => `${role},`)}</p>
                        <p className="flex justify-between w-1/5">Result<span>:</span></p>
                        <p className="w-9/12">{project.result}</p>
                    </div>
                    {/* <NavLink to={`project/${project.id}`} className="rounded-md w-fit btn btn-primary">Details</NavLink> */}
                </div>
            ))}
        </>
    );
}
 
export default MainContent;