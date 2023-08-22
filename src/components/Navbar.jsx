import Image from "next/image";
import React, { useState } from "react";
import usLogo from '../assets/usLogo.png'



export default function Navbar () {
    return (
        <div className="bg-slate-900 max-w-full text-white py-4 px-20">
            <div className="flex justify-between items-center">
                <div className="flex w-[300px] justify-around items-center ">
                    <h1 className="font-extrabold text-[24px] mr-3">LOGO</h1>
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
    )
}