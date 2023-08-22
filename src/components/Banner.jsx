import React, {useState} from "react";
import Arrow from "../assets/right-arrow-6150.png";
import Image from "next/image";
import usLogo from "../assets/usLogo.png";
import CreditCard from "../assets/pngegg.png";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  const handleHover = () => {
    setIsVisible(true);
  }

  const handleunHover = () => {
    setIsVisible(false);
  }

  return (
    <div className="bg-slate-900 py-10 rounded-b-[40px] overflow-hidden" 
    onMouseEnter={handleHover}
        onMouseLeave={handleunHover}
    >
      <div className="max-w-full flex text-slate-50 max-h-500px bg-transparent">
        <div className="p-20 w-1/2">
          <h1 className="text-[42px] font-extrabold">
            Digital you universe bank
          </h1>
        </div>
        <div className="p-16 w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            exercitationem illum totam commodi quidem corrupti velit ab
            voluptatum praesentium! Velit similique aliquid alias, incidunt
            corrupti natus quis distinctio. Aperiam, soluta.
          </p>
          <span className="flex justify-center items-center mt-4 ">
            <button
              className="mr-2 text-slate-950 bg-green-300 rounded-3xl w-4/5 text-[44px]"
              type="button"
            >
              Digitize Now
            </button>
            <buton className="px-4 py-3 bg-slate-700 rounded-full">
              <Image src={Arrow} width={40} height={40} alt="not Found" />
            </buton>
          </span>
        </div>
      </div>
      <div className="max-w-full flex justify-end text-slate-50 max-h-300px bg-transparent">
        <div className=" pt-10 px-16 w-1/3">
          <div className="flex justify-center items-center">
            <div className="flex -space-x-4 mr-4">
              <Image
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={usLogo}
                width={30}
                height={30}
                alt="Not fount"
              />
              <Image
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={usLogo}
                width={30}
                height={30}
                alt="Not fount"
              />
              <Image
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={usLogo}
                width={30}
                height={30}
                alt="Not fount"
              />
            </div>
            <span className="text-[32px] font-bold">16M</span>
          </div>
          <ul>
            <li>
              <p className="text-center">Lorem ipsum dolor sit</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-full flex justify-end text-slate-950 bg-transparent px-10 py-4">
        <button className="bg-green-300 text-slate-950 flex flex-col rounded-3xl py-2 items-center">
            <span className="transform rotate-90 mt-4 mb-1">scroll</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mb-1"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fillRule="evenodd"
                d="M10 15.293l5.146-5.147a.5.5 0 01.708.708l-5.5 5.5a.5.5 0 01-.708 0l-5.5-5.5a.5.5 0 01.708-.708L10 15.293z"
                clipRule="evenodd"
                />
            </svg>
        </button>
      </div>
      {/* <div className="overflow-hidden"> */}
      <div className={`relative w-full bg-slate-400`}>
  <Image className={`rotate-90 w-[25%] ml-[30%] absolute top-10 ${
            isVisible ? "rotate-[65deg] translate-y-[-50%] duration-700" : ""
          }`} src={CreditCard} width={100} height={100} alt="not found" />
  <Image className={`rotate-90 w-[25%] ml-[30%] absolute top-10 left-5 ${
            isVisible ? "translate-y-[-60%] duration-700" : ""
          }`} src={CreditCard} width={100} height={100} alt="not found" />
  <Image className={`rotate-90 w-[25%] ml-[30%] absolute top-10 left-10 ${
            isVisible ? "rotate-[120deg] translate-y-[-50%] duration-700" : ""
          }`} src={CreditCard} width={100} height={100} alt="not found" />
</div>

      </div>
    // </div>
  );
}
