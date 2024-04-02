import Image from 'next/image'
import Link from "next/link"

export default function Nav() {

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
            <ul>
                { navLinks.map((link, index) => <li className="inline-block pr-3" key={`nav-link-${index}`}><Link href={link.path}>{link.displayText}</Link></li>) }
            </ul>
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