import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const navbarData = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Culinary Delights",
            link: "/culinary-delights",
            submenu: [
                {
                    name: "Breakfast",
                    link: "/recipes/breakfast"
                },
                {
                    name: "Lunch Menu",
                    link: "/recipes/lunch-menu"
                },
                {
                    name: "Dinner",
                    link: "/recipes/dinner"
                }
            ]
        },
        {
            name: "About Us",
            link: "/about-us"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ];
    return (
        <div className='max-w-[1200px] xl:mx-auto mx-2 flex items-center justify-between mt-6'>
            <div className='text-3xl md:hidden block relative'>
                {
                    !navbar ? <IoMenu onClick={() => setNavbar(!navbar)} /> :
                        <CgClose onClick={() => setNavbar(!navbar)} />
                }
                <div className={`${!navbar ? "hidden" : "block"} flex flex-col gap-1 text-base bg-white text-black p-5 rounded-md mt-2 absolute `}>
                    {
                       navbarData.map((data, i) => <a key={i} href={data.link}> {data.name}</a>)
                    }
                </div>
            </div>

            <div className='md:flex justify-center gap-10 hidden'>
                {
                    navbarData.map((data, i) => <a key={i} href={data.link}> {data.name}</a>)
                }
            </div>
            <FaRegUserCircle className='text-3xl' />

        </div>
    );
};

export default Navbar;