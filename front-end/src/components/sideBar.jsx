import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const SideBar = ({ displaySideBar, setDisplaySideBar }) => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        {displaySideBar && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeIn" }}
            className="z-10 fixed bg-purplefonce top-2 left-2 w-3xs text-white pb-3 transition-transform duration-800 transform translate-x-0"
          >
            <ul className="mb-3 p-3">
              <button
                className="text-4xl font-extrabold hover:cursor-pointer hover:text-red-500"
                onClick={() => setDisplaySideBar(false)}
              >
                <i className="bx bx-x"></i>
              </button>
            </ul>

            <ul className="mb-3 p-3 text-xl font-bold hover:text-purplefoncehover">
              <Link
                to="/"
                className={`${location.pathname === "/" && "text-second"}`}
              >
                Home
              </Link>
            </ul>

            <ul className="mb-5 p-3 text-xl font-bold hover:text-purplefoncehover">
              <Link
                to="/chatPage"
                className={`${
                  location.pathname === "/chatPage" && "text-second"
                }`}
              >
                Ask Genie
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;