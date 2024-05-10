import { useParams } from "react-router-dom";

const MainContent = () => {
    // const { projectID } = useParams<Record<string, string | undefined>>()
    const { projectID } = useParams<{projectID?: string}>();
    console.log(projectID)
    return (
        <>
        {/* <main className="flex flex-col p-6 gap-y-4 sm:w-3.5 sm:flex-grow"> */}
            <h2 className="text-3xl text-center">Skrt</h2>
            <p>{projectID}</p>
        {/* </main> */}
        </>
    );
}
 
export default MainContent;