"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero from '../../public/assets/hero.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import BeginButton from "./BeginButton";
const HeroHome = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
            path: '/'
        },

    ];

    return (
        <>
            <div className="relative bg-gradient-to-r  h-screen text-white overflow-hidden"  data-aos="fade-in" >
                <div className="absolute inset-0">
                    <Image src={hero} alt="Hero" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 className="text-3xl font-bold leading-tight mb-4"  data-aos="fade-up" data-aos-delay="150">Bienvenue sur notre service de livraison de colis!</h1>
                    <p className="text-xl sm:2xl text-gray-300 mb-8"  data-aos="fade-up" data-aos-delay="200">Faites livrer vos colis en toute simplicité</p>
                    <BeginButton></BeginButton>

                </div>
            </div>
        </>
    );
};

export default HeroHome;