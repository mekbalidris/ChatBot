import React, { useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Nav() {

  const [displaySideBar, setDisplaySideBar] = useState("true");

  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >


      <header className="flex flex-row lg:px-20 px-3 pt-2 justify-between items-center">
        <div className="text-4xl text-white">
          <button onClick={() => {console.log("youcef")}}>
            ☰
          </button>
        </div>
        <div className="text-4xl font-main text-main drop-shadow-lg">Chatbot</div>
        <img className="pt-2" src={profile} width={60} alt="profile" />
      </header>
    </motion.nav>
  );
}