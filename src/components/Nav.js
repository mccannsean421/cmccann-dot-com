"use client"
import Link from "next/link";
import { useState } from 'react';
import { usePathname } from 'next/navigation'

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
            displayText: "About",
            path: "/about",
        },
        {
            displayText: "Blog",
            path: "/blog",
        }

    ];

    const socialLinks = [
        {
            icon:
            `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          `,
            href: "https://www.linkedin.com/in/cormac-mccann-70052283/"
        },
        {
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            `,
            href: "https://github.com/mccannsean421"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
            
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>`,
          href: "https://x.com/cmccanndev"
        }
    ];
    
    return <nav className="p-6 grid grid-cols-2">
        {/* nav links */}
        <div>
            <ul className={`absolute lg:relative lg:left-auto duration-200 top-32 lg:top-0 h-screen w-screen lg:h-auto lg:w-auto bg-black ${mobileNavIsOpen ? "left-0 " : "-left-[100%]"}`}>
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
        <ul>
            { socialLinks.map((link, index) => 
                <li key={`social-link-${index}`} className="inline-block pr-3">
                    <a  href={link.href} className="pr-3 social-link" target="_blank" rel="nofollow" dangerouslySetInnerHTML={{ __html: link.icon }} />
                </li>
            ) }
        </ul>
        </div>
    </nav>
}