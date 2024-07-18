"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BeginButton = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
                    <Link href="./Etape-une" className="bg-primary text-white hover:bg-primary-300 py-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"  data-aos="fade-up" data-aos-delay="250">Commencer</Link>

        </>
    );
};

export default BeginButton;