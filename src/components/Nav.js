
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
            icon: "",
            href: ""
        }
    ];
    
    return <nav className="p-6 grid grid-cols-2">
        {/* nav links */}
        <ul>
            { navLinks.map((link, index) => <Link key={`nav-link-${index}`} href={link.path} className="pr-3">{link.displayText}</Link>) }
        </ul>

        {/* social links */}
        <ul>
            { socialLinksLinks.map((link, index) => <Link key={`nav-link-${index}`} href={link.path} className="pr-3">{link.displayText}</Link>) }
        </ul>
    </nav>
}