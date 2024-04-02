"use client"
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';

export default function Nav() {

    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

    const navLinks = [
        {
            displayText: "Home",
            path: "/",
        },
        {
            displayText: "Work",
            path: "/work",
        },
        {
            displayText: "About",
            path: "/about",
        },
        {
            displayText: "Hobbies",
            path: "/hobbies"
        }

    ];

    const socialLinks = [
        {
            icon: "/linked.svg",
            href: "https://www.linkedin.com/in/cormac-mccann-70052283/"
        },
        {
            icon: "/github.svg",
            href: "https://github.com/mccannsean421"
        }
    ];
    
    return <nav className="p-6 grid grid-cols-2">
        {/* nav links */}
        <div>
            <ul className={`absolute lg:relative lg:left-auto duration-200 top-32 lg:top-0 h-screen w-screen lg:h-auto lg:w-auto bg-white ${mobileNavIsOpen ? "left-0 " : "-left-[100%]"}`}>
                { navLinks.map((link, index) => <li className="lg:inline-block pr-3 text-center" key={`nav-link-${index}`}><Link href={link.path} onClick={() => setMobileNavIsOpen(false)}>{link.displayText}</Link></li>) }
            </ul>
            <button className="lg:hidden" onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}><Image height={22} width={22} src="/hamburger.svg" alt="Hamburger Icon" /></button>
        </div>

        {/* social links */}
        <div className="grid justify-end">
        <ul>
            { socialLinks.map((link, index) => 
                <li key={`social-link-${index}`} className="inline-block pr-3">
                    <a  href={link.href} className="pr-3" target="_blank" rel="nofollow">
                        <Image src={link.icon} width={24} height={24} alt="LinkedIn Logo" />
                    </a>
                </li>
            ) }
        </ul>
        </div>
    </nav>
}