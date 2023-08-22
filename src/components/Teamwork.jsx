import React, { useEffect, useState } from "react";
import Widget from "../assets/widget1.png";
import Cards from "../assets/cards.png"
import Image from "next/image";

export default function ScrollingCards() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 2800;
      const triggerPositionTwo = 3500;
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
    <div className="bg-slate-900 pt-[8%]">
      <div className="text-center flex justify-center items-center">
        <div className="">
          <p className={`text-slate-400 font-bold `}>
            Teamwork makes the dream work
          </p>
          <h1 className={`text-[40px] text-white w-[700px] font-extrabold `}>
            Discover the meaning of efficiency with univers business
          </h1>
        </div>
      </div>
      <div className="cards-container h-[500px]">
        <div
          className={`left-card cardLay bg-green-300 p-4 ${
            isVisible ? "animate-scroll-to-left" : "animate-scroll-in-left"
          }`}
        >
          <div>
            <h1 className="text-[28px] w-[300px] font-bold">
              Send and receive without border
            </h1>
            <p className="text-[16px]">Explore payments</p>
          </div>
          <div className="w-full mt-10 flex justify-center items-center">
            <Image
              className="rounded-3xl"
              src={Widget}
              width={250}
              height={250}
              alt="not found"
            />
          </div>
        </div>
        <div
          className={`right-card cardLay bg-gray-700 p-4 ${
            isVisible ? "animate-scroll-to-right" : "animate-scroll-in-right"
          }`}
        >
          <div>
            <h1 className="text-[28px] text-white font-bold">
              Invoices that work smarter
            </h1>
            <p className="text-[16px] text-green-300">
              Learn more about Invoices
            </p>
          </div>
          <div className="w-full mt-[5rem] flex justify-center items-center">
            <Image
              className="rounded-3xl"
              src={Widget}
              width={250}
              height={250}
              alt="not found"
            />
          </div>
          <div
            className={`flex w-[250px] p-2 absolute top-[150px] right-10 rounded-xl ${
              isVisible ? "opacity-60 bg-slate-300" : "opacity-100"
            }`}
          >
            <div className="overflow-hidden rounded-xl mr-2">
              <Image src={Widget} width={50} height={50} alt="not found" />
            </div>
            <div className="w-full mt-4">
              <div className="flex justify-between text-slate-400 text-[10px]">
                <p className="text-[12px]">New iMac</p>
                <p>50%</p>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  class="bg-blue-600 h-2.5 w-1/2 rounded-full"
                  //   style="width: 45%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div
          className={`w-[550px] h-[450px] rounded-2xl mr-3 bg-slate-700 pt-4 pl-4 pb-4 ${
            isVisibleTwo ? "animate-scroll-to-left" : "animate-scroll-in-left"
          }`}
        >
          <div className="relative">
            <h1 className="text-[28px] text-white font-bold">
              Smart company debit cards help you and your team go further
            </h1>
            <p className="text-[16px] text-blue-500">Learn more about cards</p>
          </div>
          <div className="w-full h-full flex justify-end">
            <Image
              className="rounded-3xl"
              src={Cards}
              width={250}
              height={250}
              alt="not found"
            />
          </div>
        </div>
        <div
          className={`w-[240px] h-[450px] rounded-2xl bg-gray-700 p-4 ${
            isVisibleTwo ? "animate-scroll-to-right" : "animate-scroll-in-right"
          }`}
        >
          <div>
            <div className="p-2 w-9 rounded-full bg-slate-500 mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L14.9073 8.76306H22L16 13.2369L18.9073 20L12 15.2369L5.09273 20L8 13.2369L2 8.76306H9.09273L12 2Z"
                  fill="yellow"
                />
              </svg>
            </div>
            <h1 className="text-[24px] text-white font-bold">
              Exchange, send and spend at great rates
            </h1>
          </div>
          <div className="mt-[100%]">
            <p className="text-[16px] text-green-300">
              Explore Exchanges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
