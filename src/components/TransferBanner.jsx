import React, { useState } from "react";

export default function TransferBanner() {
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
            <p
              className={`text-slate-400 font-bold ${
                isHovered
                  ? "opacity-100 transition-opacity duration-300"
                  : "opacity-0 transition-opacity duration-700"
              }`}
            >
              Transfer
            </p>
            <h1
              className={`text-[40px] font-extrabold ${
                isHovered
                  ? "opacity-100 transition-opacity duration-300"
                  : "opacity-0 transition-opacity duration-700"
              }`}
            >
              International payments for your business
            </h1>
            <p
              className={`text-slate-400 ${
                isHovered
                  ? "opacity-100 transition-opacity duration-300"
                  : "opacity-0 transition-opacity duration-700"
              }`}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              fuga, iure eligendi reiciendis quos amet natus aliquid voluptatum
              officiis ex nihil adipisci, suscipit delectus non doloremque
              possimus. Quam, dicta dolore.
            </p>
            <div className="flex items-center">
              <a
                className={`bg-green-300 mr-4 text-black rounded-2xl flex mt-8 p-4 ${
                  isHovered
                    ? "opacity-100 transition-opacity duration-300"
                    : "opacity-0 transition-opacity duration-700"
                }`}
                href="#"
              >
                Get started
              </a>
              <a
                className={`text-white rounded-2xl border-white border-1 border flex mt-8 p-4 ${
                  isHovered
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
        <div className={`h-[700px] flex justify-center pt-[12%] overflow-hidden ${
              isHovered ? "animate-slide-in-top " : "animate-slide-in-bottom"
            }`}>
          <div className={`h-1/2 bg-gray-600 rounded-3xl ${
              isHovered
                ? "opacity-100 transition-opacity duration-300"
                : "opacity-0 transition-opacity duration-700"
            }`}>
            <div className={`w-[350px] h-[430px] rounded-3xl p-3 bg-gray-600 ${
                isHovered
                  ? "opacity-100 transition-opacity duration-300"
                  : "opacity-0 transition-opacity duration-700"
              }`}>
              <div className={`px-2 py-1 mb-2 rounded-2xl bg-gray-700 ${
              isHovered ? "animate-slide-in-left" : "animate-slide-in-right"
            }`}>
                <span className="text-slate-200 text-[9px] font-semibold">
                  You send
                </span>
                <span className="flex justify-between items-center">
                  <div className="flex my-1">
                    <span className="px-3 py-3 mr-2 bg-slate-900 rounded-full"></span>
                    <h3 className="flex items-center">
                      GBP
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 ml-1"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                    </h3>
                  </div>
                  <span>£1,000</span>
                </span>
              </div>
              <div className={`px-2 py-1 mb-2 rounded-2xl bg-gray-700 ${
              isHovered ? "animate-slide-to-right" : "animate-slide-to-left"
            }`}>
                <span className="text-slate-200 text-[9px] font-semibold">
                  Recipient gets
                </span>
                <span className="flex justify-between items-center">
                  <div className="flex my-1">
                    <span className="px-3 py-3 mr-2 bg-slate-900 rounded-full"></span>
                    <h3 className="flex items-center">
                      USD
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 ml-1"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                    </h3>
                  </div>
                  <span>$1,230.94</span>
                </span>
              </div>
              <div className={`px-2 py-1 mb-2 rounded-2xl bg-gray-700 ${
              isHovered ? "animate-slide-in-left" : "animate-slide-in-right"
            }`}>
                <div className="flex justify-between items-center">
                  <span className="flex items-center text-slate-300 text-[12px]">
                    Our current FX rate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 ml-3"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12" y2="16" />
                    </svg>
                  </span>
                  <span className="text-slate-300 text-[12px]">£1 = $1.2309</span>
                </div>
                <div className="flex justify-between my-3 items-center">
                  <span className="flex items-center text-blue-500 text-[12px]">
                    Bank transfer fee
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3 ml-4"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                  </span>
                  <span className="text-slate-300 text-[12px]">£3</span>
                </div>
                <div className="flex justify-between my-3 items-center">
                  <span className="flex items-center text-slate-300 text-[12px]">
                    FX fee
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 ml-3"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12" y2="16" />
                    </svg>
                  </span>
                  <span className="text-slate-300 text-[12px]">£4</span>
                </div>
                <div className="flex justify-between mt-3 items-center">
                  <span className="flex items-center text-slate-300 text-[12px]">
                    Your total
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 ml-3"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12" y2="16" />
                    </svg>
                  </span>
                  <span className="text-slate-300 text-[12px]">£1,007</span>
                </div>
              </div>
              <div className="text-center text-[12px] mb-4 text-slate-300">
                That's <span className="font-semibold text-white">£1,007</span> for you in total including all fees. Feeds shown are for the Free Plan. Upgrade plan and pay fewer fees or <a  href="#" className="text-blue-500">contact sales</a> to create your custom plan.
              </div>
              <button
                className="w-full py-4 bg-green-300 rounded-2xl flex justify-center items-center"
                type="button"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
