"use client"
import Link from "next/link";
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { SocialLinks } from "./SocialLinks";

export default function Nav() {
    const currentPath = usePathname();
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
            displayText: "Blog",
            path: "/blog",
        }

    ];

    
    return <nav className="p-6 grid grid-cols-2 relative z-10">
        {/* nav links */}
        <div>
            <ul className={`absolute lg:relative lg:left-auto duration-200 top-32 lg:top-0 h-screen w-screen lg:h-auto lg:w-auto ${mobileNavIsOpen ? "left-0 " : "-left-[100%]"}`}>
                { navLinks.map((link, index) => 
                <li className="lg:inline-block pr-3 text-center" key={`nav-link-${index}`}>
                    <Link href={link.path} onClick={() => setMobileNavIsOpen(false)} className={`uppercase nav-link font-bold duration-200 text-gray-400 hover:text-white ${currentPath === link.path ? "active-link" : ""}`}>
                        {link.displayText}
                    </Link>
                </li>) }
            </ul>
            <button className="lg:hidden text-white" onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}>
                { !mobileNavIsOpen ? (                
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                ) }
            </button>
        </div>

        {/* social links */}
        <div className="grid justify-end">
            <SocialLinks />
        </div>
    </nav>
}