"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../public/assets/favicon.ico';

const Navbar = () => {
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
            <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-primary fixed top-0 nav z-50">
                <div>
                <span className="flex items-center">
                <Image className="mr-3 h-10 w-28 sm:h-20 sm:w-40"  src={logo} alt={"Logo"}></Image>

                        <span className="self-center hidden sm:block sm:text-xl font-semibold whitespace-nowrap dark:text-white">Delivers</span>
                    </span>
                </div>
                <div className="flex items-center lg:order-2">
                <Link href="#" className=" text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none">Log in</Link>
                       
                </div>

                <ul className="hidden md:flex">
                    {links.map(({ id, link, path }) => (
                        <li
                            key={id}
                            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline"
                        >
                            <Link href={path}>{link}</Link>
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} color="white" />}
                </div>

                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-black text-white-500">
                        {links.map(({ id, link, path }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                <Link onClick={() => setNav(!nav)} href={path}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </>
    );
};

export default Navbar;