import React, { useEffect, useState } from "react";
import Widget from "../assets/widget1.png";
import Image from "next/image";

export default function Widgets() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      const scrollPosition = window.scrollY;
      const triggerPosition = 4000;
      setIsVisible(scrollPosition > triggerPosition);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-slate-900 pt-6">
      <div className="flex justify-center items-center rounded-3xl overflow-hidden bg-slate-700">
        <div
          className={`rounded-3xl w-[400px] h-[450px] flex justify-center items-center text-white p-4 ${
            isVisible ? "animate-slide-in-left" : "animate-slide-in-right"
          }`}
        >
          <div>
            <h1 className="text-[24px] w-[300px] font-bold">
              Send and change team permissions with a tap
            </h1>
            <p className="text-[13px] w-[300px] my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              omnis sunt labore minus dolore tenetur, enim earum, quas magnam
              quod asperiores, ratione nemo ipsum reprehenderit consequuntur
              nihil adipisci vitae placeat.
            </p>
            <a className="text-green-300" href="#">
              Discover revolut business
            </a>
          </div>
        </div>
        <div className="w-[25rem] h-[25rem] p-4">
          <div
            className={`w-full mt-[5rem] flex justify-center items-center relative ${
              isHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`absolute top-0 left-0 ${isHovered ? "z-10 transform translate-x-5 translate-y-10 duration-700 custom-shadow" : ""} rounded-3xl overflow-hidden`}>
              <Image src={Widget} width={250} height={250} alt="not found" />
            </div>
            <div className={`absolute top-0 left-0 rounded-3xl overflow-hidden back ${isHovered ? "animated" : " transform translate-x-5 translate-y-10 duration-700 custom-shadow"}`}>
              <div className={`relative ${isHovered ? "z-0" : "z-10"}`}>
                <Image src={Widget} width={250} height={250} alt="not found" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
