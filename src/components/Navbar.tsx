'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdClose, MdMenu } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';

const _navItems = ["home", "connect", "about"]

const Navbar = () => {

  return (
    <nav className="z-10 w-full sticky top-5 left-0">
        <div className="py-2 flex flex-row justify-evenly items-center border border-gray-200 shadow-xl text-theme rounded-[2rem] w-[60%] m-auto">
        {
            _navItems.map((item, ind)=>
                {
                    return <NavItem key={ind} title={item} link={"#"} />
                })
        }
        </div> 
    </nav> 
  )
}

const NavItem = ({title, link} : any) =>
{
    return (
        <Link href={link} className="px-2 text-title font-bold uppercase font-main hover:text-theme-alt transition-all duration-200">{title}</Link>
    )
}

export default Navbar