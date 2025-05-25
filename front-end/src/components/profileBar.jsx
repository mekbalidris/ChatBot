import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProfileBar = ({ displayProfileList, setDisplayProfileList }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUserData(parsedUser);
          setIsAuthenticated(parsedUser.isAuthenticated);
        } catch (error) {
          console.error('Error parsing user data:', error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userData?.token}`
        },
      });

      if (response.ok) {
        localStorage.removeItem('user');
        setUserData(null);
        setIsAuthenticated(false);
        setDisplayProfileList(false);
        navigate('/login');
      } else {
        const errorData = await response.text();
        console.error('Logout failed:', errorData);
        localStorage.removeItem('user');
        setUserData(null);
        setIsAuthenticated(false);
        setDisplayProfileList(false);
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      localStorage.removeItem('user');
      setUserData(null);
      setIsAuthenticated(false);
      setDisplayProfileList(false);
      navigate('/login');
    }
  };

  return (
    <>
      <AnimatePresence>
        {displayProfileList && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeIn" }}
            className="z-10 fixed bg-purplefonce top-2 right-2 w-3xs text-white pb-3 transition-transform duration-800 transform translate-x-0"
          >
            <ul className="mb-3 p-3">
              <button
                className="text-4xl font-extrabold hover:cursor-pointer hover:text-red-500"
                onClick={() => setDisplayProfileList(false)}
              >
                <i className="bx bx-x"></i>
              </button>
            </ul>

            {!isAuthenticated ? (
              <>
                <ul className="mb-3 p-3 text-xl font-bold hover:text-purplefoncehover">
                  <Link
                    to="/login"
                    className={`${location.pathname === "/login" && "text-second"}`}
                    onClick={() => setDisplayProfileList(false)}
                  >
                    Log in
                  </Link>
                </ul>

                <ul className="mb-3 p-3 text-xl font-bold hover:text-purplefoncehover">
                  <Link
                    to="/signup"
                    className={`${location.pathname === "/signup" && "text-second"}`}
                    onClick={() => setDisplayProfileList(false)}
                  >
                    Sign up
                  </Link>
                </ul>
              </>
            ) : (
              <>
                <ul className="mb-3 p-3 text-xl font-bold hover:text-purplefoncehover">
                  <span className="text-second">Welcome, {userData?.username}</span>
                </ul>
                <ul className="mb-3 p-3 text-xl font-bold hover:text-purplefoncehover">
                  <Link
                    to="/chatpage"
                    className={`${location.pathname === "/chatpage" && "text-second"}`}
                    onClick={() => setDisplayProfileList(false)}
                  >
                    Chat
                  </Link>
                </ul>
                <ul className="mb-5 p-3 text-xl font-bold hover:text-purplefoncehover">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 hover:text-red-500"
                  >
                    Log out <span className="text-2xl font-bold"><i className="bx bx-log-out"></i></span>
                  </button>
                </ul>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileBar;