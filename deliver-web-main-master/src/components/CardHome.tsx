"use client"
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props {
    title?: string
    description?: string
    delay?: string
}

const CardHome = ({ title, description, delay }: Props) => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>

            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 " data-aos="fade-up" data-aos-delay={delay}>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="font-normal text-gray-700 ">{description}</p>
            </div>

        </>
    );
};

export default CardHome;