import React, { useState } from "react";
import Hand from "../assets/hand.png";
import Creditcard from "../assets/creditcard.png";
import RightArrow from "../assets/right-arrow.png";
import Image from "next/image";

export default function BannerCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMainDivHover = () => {
    setIsHovered(true);
  };

  const handleMainDivLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-white w-full h-full p-[5%]">
      <div
        className="bg-slate-900 text-white max-w-full max-h-[50%] rounded-3xl flex justify-around items-center"
        onMouseEnter={handleMainDivHover}
        onMouseLeave={handleMainDivLeave}
      >
        <div className="w-[400px] overflow-hidden">
          <div
            className={`w-full ${
              isHovered ? "animate-slide-in-left" : "animate-slide-in-right"
            }`}
          >
            <h1
              className={`text-[40px] font-extrabold ${
                isHovered ? "opacity-100 transition-opacity duration-300" : "opacity-0 transition-opacity duration-700"
              }`}
            >
              Make an impression with metal
            </h1>
            <p
              className={`text-slate-400 ${
                isHovered ? "opacity-100 transition-opacity duration-300" : "opacity-0 transition-opacity duration-700"
              }`}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              fuga, iure eligendi reiciendis quos amet natus aliquid voluptatum
              officiis ex nihil adipisci, suscipit delectus non doloremque
              possimus. Quam, dicta dolore.
            </p>
            <a
              className={`text-green-300 flex mt-8 ${
                isHovered ? "opacity-100 transition-opacity duration-300" : "opacity-0 transition-opacity duration-700"
              }`}
              href="#"
            >
              Order a metal card
              <Image
                className="ml-4"
                src={RightArrow}
                width={20}
                height={20}
                alt="not found"
              />
            </a>
          </div>
        </div>
        <div className="h-[700px] overflow-hidden">
          <div className="h-1/2">
            <Image
              className={`transform ${
                isHovered
                  ? "rotate-[-30deg] translate-x-32 -translate-y-[300px] transition-transform duration-700 translate-y-1/4"
                  : "rotate-[25deg] translate-x-32 -translate-y-[300px]  transition-transform duration-1000"
              }`}
              src={Creditcard}
              width={400}
              height={400}
              alt="not found"
            />
          </div>
          <Image
            className={`transform ${
              isHovered
                ? "rotate-[5deg] transition-transform duration-700 translate-y-1/2"
                : "rotate-[35deg] translate-y-[400px]  transition-transform duration-700"
            }`}
            src={Hand}
            width={600}
            height={600}
            alt="not found"
          />
        </div>
      </div>
    </div>
  );
}
