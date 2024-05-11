import photo from "./../assets/photo-profile.webp"

const Sidebar = () => {
    return (
        <aside id="overview" className="p-6 text-justify scroll-mt-12 sm:max-w-xs lg:max-w-md">
            <h2 className="text-3xl text-center">Overview</h2>
            <img className="pt-6 mx-auto max-h-60 md:max-h-96" src={photo} alt="photo-profile" />
            <p className="p-6 text-xs italic text-center text-gray-400">-this is when I gave counseling to my juniors about selecting a college.</p>
            <p>As a website developer, I've assisted numerous individuals in resolving website-related issues, ranging from homework assignments to crafting basic scripts, custom websites, and WordPress solutions. <span className="text-accent">My role revolves around swiftly and affordably creating websites tailored to meet clients' needs.</span></p>
            <p className="mt-4">I specialize in web development but enjoy branching out, sometimes taking courses in UI/UX and writing.</p>
        </aside>
    );
}
 
export default Sidebar;