import Header from './sections/Header'
import Biodata from './sections/Biodata'
import Doing from './sections/Doing'
import Project from './sections/Project'
import Mini_project from './sections/MiniProject'
import Message from './sections/Message'
import SocialMedia from './sections/SocialMedia'
import Footer from './sections/Footer'

const App = () => {
    return (
        <div className="text-one font-Poppins mx-auto text-2xl leading-loose md:w-1/2">
            <Header />
            <main>
                <Biodata />
                <Doing />
                <Project />
                <Mini_project />
                <Message />
                <SocialMedia />
                <Footer />
            </main>
        </div>
    )
}

export default App
