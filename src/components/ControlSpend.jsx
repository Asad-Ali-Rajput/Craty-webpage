import React from "react";
import Widget from "../assets/widget1.png";
import Image from "next/image";


export default function Controlspend () {
    const data = [
        {
            logo: Widget,
            title: "cosmetics",
            date: "March 25, 2022",
            price: "$100"
        },
        {
            logo: Widget,
            title: "food",
            date: "March 29, 2022",
            price: "$45"
        },
        {
            logo: Widget,
            title: "shopping",
            date: "March 27, 2022",
            price: "-$241"
        },
        {
            logo: Widget,
            title: "others",
            date: "March 26, 2022",
            price: "$100"
        },
        {
            logo: Widget,
            title: "tech",
            date: "March 29, 2022",
            price: "$45"
        }
    ]
        
    return (
        <div className="flex justify-center py-10 items-center pt-[8%] bg-slate-900">
            <div>
                <div className="text-[32px] mx-auto mb-10 font-extrabold w-[350px] text-center text-white">
                    Control all your spend with smart rules
                </div>
                <div className="px-6 mx-auto mb-4 text-slate-400 rounded-2xl opacity-70 bg-slate-100 py-3 flex justify-around items-center w-[500px]">
                    <Image className="rounded-full" src={Widget} width={40} height={40} alt="not found" />
                    <p>cosmetics</p>
                    <p>March 25, 2022</p>
                    <h3 className="font-bold">$100</h3>
                </div>
                <div className="px-6 mx-auto mb-4 text-slate-400 rounded-2xl opacity-70 bg-slate-100 py-3 flex justify-around items-center w-[500px]">
                    <Image className="rounded-full" src={Widget} width={40} height={40} alt="not found" />
                    <p>cosmetics</p>
                    <p>March 25, 2022</p>
                    <h3 className="font-bold">$100</h3>
                </div>
                <div className="px-6 w-[700px] mb-4 text-slate-400 rounded-2xl bg-slate-100 py-6 flex justify-around items-center">
                    <Image className="rounded-full" src={Widget} width={40} height={40} alt="not found" />
                    <p>cosmetics</p>
                    <p>March 25, 2022</p>
                    <h3 className="font-bold">$100</h3>
                </div>
                <div className="px-6 mx-auto mb-4 text-slate-400 rounded-2xl opacity-70 bg-slate-100 py-3 flex justify-around items-center w-[500px]">
                    <Image className="rounded-full" src={Widget} width={40} height={40} alt="not found" />
                    <p>cosmetics</p>
                    <p>March 25, 2022</p>
                    <h3 className="font-bold">$100</h3>
                </div>
                <div className="px-6 mx-auto text-slate-400 rounded-2xl opacity-70 bg-slate-100 py-3 flex justify-around items-center w-[500px]">
                    <Image className="rounded-full" src={Widget} width={40} height={40} alt="not found" />
                    <p>cosmetics</p>
                    <p>March 25, 2022</p>
                    <h3 className="font-bold">$100</h3>
                </div>
            </div>
        </div>
    )
}