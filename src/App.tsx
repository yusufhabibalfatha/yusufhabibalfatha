import photo from "./assets/photo-profile.jpeg"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"

export default function App() {
  return (
    <div className="flex flex-col">
        {/* nav */}
      <Navbar />

      {/* testi */}
      <Testimonials />

      {/* sidebar */}
      <aside className="p-6 text-justify bg-base-100">
      <h2 className="text-3xl">Overview</h2>
        <img className="mx-auto max-h-60 p-6" src={photo} alt="photo-profile" />
        <p>I am a website developer. I have helped several people solve problems related to websites. Examples include homework, basic scripts, custom websites, and WordPress. <span className="font-bold">My job is to create websites quickly and affordably.</span></p>
        <p>I specialize in web development but enjoy branching out, sometimes taking courses in UI/UX and writing.</p>
      </aside>

      {/* main content */}
      <main className="bg-base-200 p-6 flex flex-col gap-y-4">
        <h2 className="text-3xl">Projects</h2>
        <div className="bg-base-100 p-6 rounded-xl whitespace-pre-wrap">
            <h2 className="font-bold text-xl">Completed building the boarding school organization website</h2>
            <div className="flex flex-col gap-2 mt-4">
                <p><span className="font-bold">Who</span>      : Almukminun Foundation Tarakan City</p>
                <p><span className="font-bold">Role</span>      : UX research, UI design, WordPress developer</p>
                <p><span className="font-bold">Result</span>   : The platform becomes a forum for registration, promotions and presentations</p>
            </div>
        </div>
        <div className="bg-base-100 p-6 rounded-xl whitespace-pre-wrap">
            <h2 className="font-bold text-xl">Complete random embedding of Instagram post to the website</h2>
            <div className="flex flex-col gap-2 mt-4">
                <p><span className="font-bold">Who</span>      : Personnel from Fiverr</p>
                <p><span className="font-bold">Role</span>      : Frontend developer</p>
                <p><span className="font-bold">Result</span>   : A dynamic website displays random Instagram posts through embeds for further optimization</p>
            </div>
        </div>
        <div className="bg-base-100 p-6 rounded-xl whitespace-pre-wrap">
            <h2 className="font-bold text-xl">Finished college assignments on website building through coding</h2>
            <div className="flex flex-col gap-2 mt-4">
                <p><span className="font-bold">Who</span>      : Personnel from Fiverr</p>
                <p><span className="font-bold">Role</span>      : Frontend developer</p>
                <p><span className="font-bold">Result</span>   : Completed a task involving creating a website using HTML, CSS, and JavaScript technology</p>
            </div>
        </div>
        <div className="bg-base-100 p-6 rounded-xl whitespace-pre-wrap">
            <h2 className="font-bold text-xl">Completed a custom website to display several books</h2>
            <div className="flex flex-col gap-2 mt-4">
                <p><span className="font-bold">Who</span>      : Personnel from Fiverr</p>
                <p><span className="font-bold">Role</span>      : Frontend developer</p>
                <p><span className="font-bold">Result</span>   : Website that displays a collection of books like a bookshelf display</p>
            </div>
        </div>
      </main>
    </div>
  )
}