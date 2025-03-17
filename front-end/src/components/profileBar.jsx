import {Link, useLocation} from "react-router-dom"


const ProfileBar = ({diplayProfileList, setDisplayProfileList}) => {

    return (
        <>
            {setDisplayProfileList &&
                <div className={`fixed bg-main top-2 right-2 w-3xs text-white pb-3 transition-transform  duration-800 transform ${diplayProfileList ? "translate-x-0" : "translate-x-[200%]"}`}>
                    <ul className="mb-3 p-3">
                        <button className="text-4xl font-extrabold hover:text-red-500"
                            onClick={() => { setDisplayProfileList(!diplayProfileList) }}>
                            <i className='bx bx-x'></i>
                        </button>
                    </ul>

                    <ul className="mb-3 p-3 text-xl font-bold">
                        <Link to="/" className={`${location.pathname === "/signe" && "text-[#36135a]"}`}>Log in</Link>
                    </ul>

                    <ul className="mb-3 p-3 text-xl font-bold">
                        <Link to="/chatPage" className={`${location.pathname === "/Signe" && "text-[#36135a]"}`}>Sign In</Link>
                    </ul>

                    <ul className="mb-5 p-3 text-xl font-bold">
                        <Link to="/chatPage" className={`${location.pathname === "/signe" && "text-[#36135a]"}`}>Log Out <span className="text-2xl font-bold "><i class='bx bx-log-out'></i></span></Link>
                    </ul>
                </div>
            }
        </>
    )
}

export default ProfileBar;