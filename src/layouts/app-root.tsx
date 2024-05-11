import Navbar from "./../components/Navbar"
import { Outlet } from "react-router-dom";

const AppRoot = () => {
    return (
        <div className="flex flex-col sm:flex-wrap sm:flex-row bg-base-200">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default AppRoot;