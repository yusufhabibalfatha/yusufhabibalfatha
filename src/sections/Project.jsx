import { FaRegHandPointRight } from 'react-icons/fa6'

const Project = () => {
    return (
        <div className="border-t-[1px] border-black px-6 py-32">
            <p>
                <b>You can see</b> my project about building a school website.
            </p>
            <p className="mt-16">
                what is my contribution: <br></br>create features,<br></br>{' '}
                ui/ux research,
            </p>
            <a
                href="https://almukminuntarakan.org"
                className="mt-16 flex w-fit items-center gap-2 rounded-full border border-black px-10 py-2"
            >
                Visit
                <FaRegHandPointRight />
            </a>
        </div>
    )
}

export default Project
