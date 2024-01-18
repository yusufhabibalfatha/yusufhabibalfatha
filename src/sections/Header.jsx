import { PiHandWavingDuotone } from 'react-icons/pi'

const Header = () => {
    return (
        <header className="px-6 py-32">
            <div className="bg-one absolute left-0 top-0 h-3 w-full sm:hidden"></div>
            <h1 className="flex items-center">
                Hello! <PiHandWavingDuotone size={30} />
            </h1>
            <p className="mt-16">
                I am a <b>freelance frontend developer</b> and an informatics
                teacher. You can call me Yusuf.
            </p>
        </header>
    )
}

export default Header
