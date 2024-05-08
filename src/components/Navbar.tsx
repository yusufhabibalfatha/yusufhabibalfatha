const Navbar = () => {
    return (
        <div className="sticky top-0 drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="flex flex-col drawer-content">
                {/* Navbar */}
                <div className="justify-between w-full navbar bg-base-300">
                    <div className="px-2 mx-2">Yusuf Habib Alfatha</div>
                    {/* <div className="flex-none md:hidden"> */}
                    <div className="flex-none hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    
                    {/* <div className="flex-none hidden md:block"> */}
                    <div className="flex-none hidden">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                        <li><a>Navbar desktop 1</a></li>
                        <li><a>Navbar desktop 2</a></li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="min-h-full p-4 menu w-80 bg-base-200">
                {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;