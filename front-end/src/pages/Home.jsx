import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import rocket from "../assets/rocket.png";
import Marquee from "react-fast-marquee";
import HomeBackground from "../components/HomeBackground"

export default function Home() {
  const text = `one chat away from building a dream! ...`;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const goTochatpage = () => {
    navigate("chatpage")
  }

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <>
      <HomeBackground />
      <div className="flex lg:flex-row flex-col xl:absolute xl:mt-0 xl:top-0 xl:h-screen w-full justify-between items-center lg:gap-[13%] gap-5 mt-15 px-20">
        <motion.div
          className="lg:text-5xl sm:text-3xl text-2xl text-white font-main lg:w-180"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayedText.split(" ").map((word, i) => (
            <span key={i} className={word === "dream!" || word === "..." ? "text-second" : ""}>
              {word}{" "}
            </span>
          ))}
          <motion.span
            className="text-second"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        </motion.div>

        <motion.img
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="float"
          src={rocket}
          alt="rocket"
          width={300}
        />
      </div>
      <div className="flex flex-col gap-10 mt-40 xl:mt-150">
        <div className="flex flex-col justify-center items-center">
          <div className="font-main text-main text-3xl">
            Start Innovating
          </div>
          <div className="font-secondary font-bold text-3xl text-white mt-4">
            Now !!
          </div>

          <button className="bg-purplefonce px-5 py-3 text-xl mt-10 rounded-4xl text-white font-bold hover:cursor-pointer hover:bg-purplefoncehover transition-all duration-500"
                  onClick={goTochatpage}>
            Click To Chat
          </button>
          
        </div>
        <div className="mt-5">
          <Marquee pauseOnHover={true} speed={40}>
            {/* Tweet Block 1 */}
            <div className="mx-4 w-64 sm:w-80 md:w-96 rotate-2 hover:rotate-0 transition-all duration-500">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">i liked how this AI helps you build your startup <a href="https://twitter.com/startupgenie25?ref_src=twsrc%5Etfw">@startupgenie25</a></p>
                &mdash; idrismekbal (@idrismekbal) <a href="https://twitter.com/idrismekbal/status/1900956305143071049?ref_src=twsrc%5Etfw">March 15, 2025</a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>

            {/* Tweet Block 2 */}
            <div className="mx-4 w-64 sm:w-80 md:w-96 rotate-[-2deg] hover:rotate-0 transition-all duration-500">
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">if you&#39;re looking to innovate your startup i suggest you use this amazing AI <a href="https://twitter.com/startupgenie25?ref_src=twsrc%5Etfw">@startupgenie25</a></p>&mdash; hmd😎 (@Da_ahmed_) <a href="https://twitter.com/Da_ahmed_/status/1901012147930312792?ref_src=twsrc%5Etfw">March 15, 2025</a></blockquote>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>

            {/* Tweet Block 3 */}
            <div className="mx-4 w-64 sm:w-80 md:w-96 rotate-2 hover:rotate-0 transition-all duration-500">
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Another super AI tool to improve your startup <a href="https://twitter.com/startupgenie25?ref_src=twsrc%5Etfw">@startupgenie25</a></p>&mdash; Imad Naitmihoub (@naitmihoub) <a href="https://twitter.com/naitmihoub/status/1901029306513715679?ref_src=twsrc%5Etfw">March 15, 2025</a></blockquote>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>

            {/* Tweet Block 4 */}
            <div className="mx-4 w-64 sm:w-80 md:w-96 rotate-[-2deg] hover:rotate-0 transition-all duration-500">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">i liked how this AI helps you build your startup <a href="https://twitter.com/startupgenie25?ref_src=twsrc%5Etfw">@startupgenie25</a></p>
                &mdash; idrismekbal (@idrismekbal) <a href="https://twitter.com/idrismekbal/status/1900956305143071049?ref_src=twsrc%5Etfw">March 15, 2025</a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>

            {/* Tweet Block 5 */}
            <div className="mx-4 w-64 sm:w-80 md:w-96 rotate-2 hover:rotate-0 transition-all duration-500">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">i liked how this AI helps you build your startup <a href="https://twitter.com/startupgenie25?ref_src=twsrc%5Etfw">@startupgenie25</a></p>
                &mdash; idrismekbal (@idrismekbal) <a href="https://twitter.com/idrismekbal/status/1900956305143071049?ref_src=twsrc%5Etfw">March 15, 2025</a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>

            {/* Tweet Block 6 */}
            <div className="mx-4 w-64 sm:w-80 md:w-96 rotate-[-2deg] hover:rotate-0 transition-all duration-500">
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">i liked how this AI helps you build your startup <a href="https://twitter.com/startupgenie25?ref_src=twsrc%5Etfw">@startupgenie25</a></p>
                &mdash; idrismekbal (@idrismekbal) <a href="https://twitter.com/idrismekbal/status/1900956305143071049?ref_src=twsrc%5Etfw">March 15, 2025</a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>

          </Marquee>
        </div>
      </div>
    </>
  );
}
