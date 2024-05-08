import photo from "./../assets/photo-profile.jpeg"

const Sidebar = () => {
    return (
        <aside className="p-6 text-justify sm:max-w-xs lg:max-w-md">
            <h2 className="text-3xl text-center">Overview</h2>
            <img className="p-6 mx-auto max-h-60 md:max-h-96" src={photo} alt="photo-profile" />
            <p>I am a website developer. I have helped several people solve problems related to websites. Examples include homework, basic scripts, custom websites, and WordPress. <span className="font-bold">My job is to create websites quickly and affordably.</span></p>
            <p>I specialize in web development but enjoy branching out, sometimes taking courses in UI/UX and writing.</p>
        </aside>
    );
}
 
export default Sidebar;