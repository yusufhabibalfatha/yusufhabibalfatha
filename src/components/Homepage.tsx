import Overview from "./Overview"
import Testimonials from "./../components/Testimonials"
import Header from "./../components/Header"
import Footer from "./../components/Footer"
import { Outlet } from "react-router-dom"

const Homepage = () => {
    return (
        <>
            <Header />
            <Testimonials />
            <Overview />
            <Outlet />
            <Footer />
        </>
    );
}
 
export default Homepage;