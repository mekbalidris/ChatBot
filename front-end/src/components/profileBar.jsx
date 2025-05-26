import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const ProfileBar = ({ displayProfileList, setDisplayProfileList }) => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        {displayProfileList && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-10 fixed top-2 right-2 w-72 bg-[var(--color-1)] text-[var(--color-3)] rounded-lg shadow-lg"
          >
            <div className="flex justify-start p-2">
              <button
                onClick={() => setDisplayProfileList(false)}
                className="text-2xl hover:text-red-500"
              >
                <i className="bx bx-x"></i>
              </button>
            </div>


            <Link
                to="/login"
                onClick={() => setDisplayProfileList(false)}
                className={`${
                  location.pathname === "/login" && "text-[var(--color-2)]"
                }`}
              >
            <ul className="mb-3 ml-2 p-2 font-bold cursor-pointer hover:text-[var(--color-2)] hover:bg-[var(--color-3)]">
                Log in
            </ul>
            </Link>

            <Link
                to="/signup"
                onClick={() => setDisplayProfileList(false)}
                className={`${
                  location.pathname === "/signup"
                    ? "text-[var(--color-2)]"
                    : ""
                }`}
              >
            <ul className="mb-3 ml-2 p-2 font-bold cursor-pointer hover:text-[var(--color-2)] hover:bg-[var(--color-3)]">
                Sign up
            </ul>
            </Link>
            
            <Link
                to="/"
                onClick={() => {
                  localStorage.clear();
                  setDisplayProfileList(false);
                }}
                className={`${location.pathname === "/" ? "" : ""}`}
              >
            <ul className="mb-3 ml-2 p-2 cursor-pointer hover:text-[var(--color-2)] hover:bg-[var(--color-3)] font-bold">
              
                Log out{" "}
                <span className="text-xl font-bold">
                  <i className="bx bx-log-out"></i>
                </span>
            </ul>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileBar;