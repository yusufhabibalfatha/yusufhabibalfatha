import { FaRegHandPointRight } from 'react-icons/fa6'

const MiniProject = () => {
    return (
        <div className="border-t-[1px] border-black px-6 py-32">
            <p>
                <b>There are several</b> mini projects that I built. Such as
                authentication, email sender, blogger.
            </p>
            <a
                href="https://github.com/yusufhabibalfatha/__portfolio/tree/master/mini-project"
                className="mt-16 flex w-fit items-center gap-2 rounded-full border border-black px-10 py-2"
            >
                Mini-project
                <FaRegHandPointRight />
            </a>
        </div>
    )
}

export default MiniProject
