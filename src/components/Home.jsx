import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Description from "./Description";
import Info from "./Info";
import Cards from "./Cards";
import BannerCard from "./BannerCard";
import TransferBanner from "./TransferBanner";
import Teamwork from "./Teamwork";
import Widgets from "./Widgets";
import Controlspend from "./ControlSpend";
import Footer from "./Footer";
import DivWithStomach from "./CurlyBracket";


export default function HomeLayout () {
    return (
        <div className="max-w-screen max-h-screen px-4 bg-white">
            <Navbar />
            <Banner />
            <Description />
            <Info />
            <Cards />
            <BannerCard />
            <TransferBanner />
            <Teamwork />
            <Widgets />
            <Controlspend />
            <Footer />
        </div>
    )
}