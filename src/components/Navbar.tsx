const Navbar = () => {
    return (
        // <nav className="sticky top-0 flex justify-between w-full px-6 py-3 bg-base-300">
        //     <h1 className="font-bold">Yusuf Habib Alfatha</h1>
        //     <div className="drawer">
        //         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        //         <div className="drawer-content">
        //             {/* Page content here */}
        //             <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
        //         </div> 
        //         <div className="drawer-side">
        //             <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        //             <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
        //             {/* Sidebar content here */}
        //             <li><a>Sidebar Item 1</a></li>
        //             <li><a>Sidebar Item 2</a></li>
                    
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="flex flex-col drawer-content">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    <div className="flex-1 px-2 mx-2">Yusuf Habib Alfatha</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                        <li><a>Navbar Item 1</a></li>
                        <li><a>Navbar Item 2</a></li>
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