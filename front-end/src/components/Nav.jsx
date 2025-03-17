import React, { useState } from "react";
import { motion } from "framer-motion";
import SideBar from "./sideBar";
import ProfileBar from "./profileBar";
import profile from "../assets/profile.png";
import { Link } from "react-router";

export default function Nav() {
  const [displaySideBar, setDisplaySideBar] = useState(false);
  const [displayProfileList, setDisplayProfileList] = useState(false);


  const toggleSideBar = () => {
    setDisplaySideBar(!displaySideBar);
    if (!displaySideBar) setDisplayProfileList(false);
  };

  const toggleProfileBar = () => {
    setDisplayProfileList(!displayProfileList);
    if (!displayProfileList) setDisplaySideBar(false);
  };


  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <SideBar
        displaySideBar={displaySideBar}
        setDisplaySideBar={setDisplaySideBar}
        setDisplayProfileList={setDisplayProfileList}
      />
      <ProfileBar
        displayProfileList={displayProfileList}
        setDisplayProfileList={setDisplayProfileList}
        setDisplaySideBar={setDisplaySideBar}
      />

      <header className="flex flex-row lg:px-20 px-3 pt-2 justify-between items-center">
        <button 
          className="text-4xl text-white hover:cursor-pointer" 
          onClick={toggleSideBar}>
            ☰
        </button>
        <Link to="/" className="sm:text-4xl text-xl font-main text-main drop-shadow-lg hover:cursor-pointer">StartupGenie</Link>
        <img
          className="pt-2 hover:cursor-pointer"
          src={profile}
          width={60}
          alt="profile"
          onClick={toggleProfileBar}
        />
      </header>
    </motion.nav>
  );
}
