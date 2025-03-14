import React from "react";
import stars from "../assets/stars.png";

export default function Background() {
  return (
    <>
      <div className="absolute top-0 w-full z-[-1] flex flex-col">
        {/* First Background */}
        <div className="h-[100vh] bg-linear-to-t from-[#5B209A] to-[#36135A] z-[-1]">
          <div className="absolute top-0 left-0 w-screen h-[60vh] overflow-hidden">
            <img
              className="absolute w-full h-[100vh] object-cover animate-[scrollStars_40s_linear_infinite] blur-[2px]"
              src={stars}
              alt="Stars"
            />
            <img
              className="absolute w-full h-[100vh] object-cover top-[-100vh] animate-[scrollStars_40s_linear_infinite] blur-[2px]"
              src={stars}
              alt="Stars"
            />
          </div>
        </div>

        {/* Second Background */}
        <div className="h-[100vh] bg-linear-to-t from-[#5B209A] to-[#36135A] z-[-1] rotate-180">
          <div className="absolute left-0 w-screen h-[60vh] overflow-hidden">
            <img
              className="absolute w-full h-[100vh] object-cover animate-[scrollStars_40s_linear_infinite] blur-[2px]"
              src={stars}
              alt="Stars"
            />
            <img
              className="absolute w-full h-[100vh] object-cover top-[-100vh] animate-[scrollStars_40s_linear_infinite] blur-[2px]"
              src={stars}
              alt="Stars"
            />
          </div>
        </div>
      </div>
    </>
  );
}