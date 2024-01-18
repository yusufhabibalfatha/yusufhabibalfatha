import { PiLinkedinLogoBold } from 'react-icons/pi'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'

const SocialMedia = () => {
    return (
        <div className="border-t-[1px] border-black px-6 py-32">
            <p>
                <b>My social media</b> and several accounts that support my
                career.
            </p>
            <div className="mt-16 flex flex-col gap-3">
                <a
                    href="https://www.linkedin.com/in/yusuf-habib-alfatha"
                    className="flex w-1/2 items-center  gap-2  py-2"
                >
                    LinkedIn
                    <PiLinkedinLogoBold />
                </a>
                <a
                    href="https://instagram.com/yusup.alfa"
                    className="flex w-1/2 items-center  gap-2 py-2"
                >
                    Instagram
                    <FaInstagram />
                </a>
                <a
                    href="https://github.com/yusufhabibalfatha"
                    className="flex w-1/2 items-center  gap-2 py-2"
                >
                    Github
                    <FaGithub />
                </a>
                <a
                    href="https://www.fiverr.com/yusufhabib164"
                    className="flex w-1/2 items-center  gap-2 py-2"
                >
                    Fiverr
                    <TbBrandFiverr />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
