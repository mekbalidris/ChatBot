import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <header className="flex flex-row px-20 pt-2 justify-between items-center">
        <div className="text-4xl text-white">☰</div>
        <div className="text-4xl font-main text-main drop-shadow-lg">Chatbot</div>
        <img className="pt-2" src={profile} width={60} alt="profile" />
      </header>
    </motion.nav>
  );
}