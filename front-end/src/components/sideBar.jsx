import {Link, useLocation} from "react-router-dom"


const SideBar = ({displaySideBar, setDisplaySideBar}) => {
    const location = useLocation();
    return (
        <>
            {displaySideBar &&
                <div className={`fixed bg-main top-2 left-2 w-3xs text-white pb-3 transition-transform  duration-800 transform ${displaySideBar ? "translate-x-0" : "-translate-x-full"}`}>
                    <ul className="mb-3 p-3">
                        <button className="text-4xl font-extrabold hover:text-red-500"
                            onClick={() => { setDisplaySideBar(!displaySideBar) }}>
                            <i className='bx bx-x'></i>
                        </button>
                    </ul>

                    <ul className="mb-3 p-3 text-xl font-bold">
                        <Link to="/" className={`${location.pathname === "/" && "text-[#36135a]"}`}>Home Page</Link>
                    </ul>

                    <ul className="mb-5 p-3 text-xl font-bold">
                        <Link to="/chatPage" className={`${location.pathname === "/chatPage" && "text-[#36135a]"}`}>Chat Page</Link>
                    </ul>
                </div>
            }
        </>
    )
}

export default SideBar;