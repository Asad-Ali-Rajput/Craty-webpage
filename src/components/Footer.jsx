import React, { useState, useEffect } from "react";
import usLogo from '../assets/usLogo.png'
import Image from "next/image";


export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 5150;
      const triggerPositionTwo = 5400;
      setIsVisible(scrollPosition > triggerPosition)
      setIsVisibleTwo(scrollPosition > triggerPositionTwo);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full pt-[3rem] bg-slate-900 px-[6rem]">
      <div className="bg-white py-[5rem]">
        <div className="flex justify-center items-center text-center">
          <div className="w-[30rem] overflow-hidden">
            <div
              className={`w-full ${
                isVisible ? "animate-slide-in-top" : "animate-slide-in-bottom"
              }`}
            >
              <p
                className={`text-slate-400 font-bold ${
                  isVisible
                    ? "opacity-100 transition-opacity duration-300"
                    : "opacity-0 transition-opacity duration-700"
                }`}
              >
                What are you waiting for?
              </p>
              <h1
                className={`text-[40px] font-extrabold ${
                  isVisible
                    ? "opacity-100 transition-opacity duration-300"
                    : "opacity-0 transition-opacity duration-700"
                }`}
              >
                Make your business spending smarter
              </h1>
              <div className="flex justify-center items-center">
                <a
                  className={`bg-green-300 mr-4 text-black rounded-2xl flex mt-8 p-4 ${
                    isVisible
                      ? "opacity-100 transition-opacity duration-300"
                      : "opacity-0 transition-opacity duration-700"
                  }`}
                  href="#"
                >
                  Try Revolut business now
                </a>
                <a
                  className={`text-black rounded-2xl border-slate-900 border-1 border flex mt-8 p-4 ${
                    isVisible
                      ? "opacity-100 transition-opacity duration-300"
                      : "opacity-0 transition-opacity duration-700"
                  }`}
                  href="#"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 mt-[6rem] py-[5rem] mx-[4rem] rounded-t-3xl">
          <div className="w-full flex justify-center">
            <h1 className={`text-[48px] text-white text-center w-[35rem] font-extrabold ${isVisibleTwo ? "animate-scroll-to-left" : "animate-scroll-in-left"}`}>
              Connect your finance with Carty
            </h1>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <button className={`px-4 py-2 bg-green-300 text-[24px] font-bold text-black rounded-3xl ${isVisibleTwo ? "animate-scroll-to-right" : "animate-scroll-in-right"}`} type="button">Rejoignez l'univers</button>
          </div>
          <div className="flex px-[4rem] text-white pt-[7rem] justify-between items-center">
          <div className="flex w-[200px] justify-around items-center ">
                    <a href="#" className="px-4 py-1 bg-green-300 rounded-2xl text-slate-950">Personal</a>
                    <a href="#" className="px-4 py-1 hover:text-slate-950 hover:rounded-3xl hover:bg-green-300">Business</a>
                </div>
                <div className="flex w-[300px] justify-around items-center "> 
                    <a href="#">Features</a>
                    <p>-</p>
                    <a href="#">Pricing</a>
                    <a href="#">Help</a>
                    <a href="#" className="flex justify-center items-center">
                        <Image className="rounded-full mr-1" src={usLogo} width={30} height={30} alt="Not fount" />
                        <span>EN</span>
                    </a>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
