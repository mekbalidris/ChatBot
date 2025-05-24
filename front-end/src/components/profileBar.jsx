import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"

const ProfileBar = ({ displayProfileList, setDisplayProfileList }) => {
  const location = useLocation();

  return (
    <>
    <AnimatePresence>
      {displayProfileList && (
        <motion.div
        initial={{ x: "100%", opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        exit={{ x: "100%", opacity: 0}}
        transition={{ duration: 0.1, ease: "easeIn"}}
        className="z-10 fixed bg-purplefonce top-2 right-2 w-3xs text-white pb-3 transition-transform duration-800 transform translate-x-0">
          <ul className="mb-3 p-3">
            <button className="text-4xl font-extrabold hover:cursor-pointer hover:text-red-500" onClick={() => setDisplayProfileList(false)}>
              <i className="bx bx-x"></i>
            </button>
          </ul>

          <ul className="mb-3 p-3 text-xl font-bold hover:text-purplefoncehover">
            <Link to="/login" className={`${location.pathname === "/login" && "text-second"}`}>Log in</Link>
          </ul>

          <ul className="mb-3 p-3 text-xl font-bold hover:text-purplefoncehover">
            <Link to="/signup" className={`${location.pathname === "/signup" && "text-second"}`}>Sign up</Link>
          </ul>

          <ul className="mb-5 p-3 text-xl font-bold hover:text-purplefoncehover">
            <Link to="/chatpage" className={`${location.pathname === "/chatpage" && "text-second"}`}>
              Log out <span className="text-2xl font-bold"><i className="bx bx-log-out"></i></span>
            </Link>
          </ul>
        </motion.div >
      )}
    </AnimatePresence>
    </>
  );
};

export default ProfileBar;