import Photo_profile from "../assets/photo-profile-small.jpeg"

const Header = () => {
    return (
        <header className="min-h-screen p-6 hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse lg:gap-24">
                <img src={Photo_profile} className="rounded-lg shadow-2xl" alt="photo-profile" />
                <div>
                    <h1 className="text-5xl font-bold">Hi i'm Yusuf. I'm website developer.</h1>
                    <p className="py-6">I assist with minor web development tasks, but my main priority is creating websites quickly and flawlessly.</p>
                    <a href="#overview" className="btn btn-primary">Overview</a>
                </div>
            </div>
        </header>
    );
}
 
export default Header;