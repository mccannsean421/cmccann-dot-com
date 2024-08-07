"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
    },
  ];

  return (
    <nav className="p-6 grid grid-cols-2 fixed md:relative z-10">
      {/* nav links */}
      <div>
        <ul
          className={`fixed md:relative top-[70px] lg:left-auto duration-200 lg:top-0 h-screen w-screen lg:h-auto lg:w-auto bg-[#08031d] md:bg-transparent ${
            mobileNavIsOpen ? "left-0 fixed" : "-left-[100%]"
          } nav-list`}
        >
          {navLinks.map((link, index) => (
            <li
              className="lg:inline-block pr-3 text-center"
              key={`nav-link-${index}`}
            >
              <Link
                href={link.path}
                onClick={() => setMobileNavIsOpen(false)}
                className={`uppercase nav-link font-bold duration-200 text-gray-400 hover:text-white text-2xl md:text-xl pb-6 ${
                  currentPath === link.path ? "active-link" : ""
                }`}
              >
                {link.displayText}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
        >
          {!mobileNavIsOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-menu-2"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* social links */}
      <div className="inline-flex justify-end">
        <a
          href="https://www.linkedin.com/in/cormac-mccann-70052283/"
          rel="nofollow"
          target="_blank"
          className={`uppercase nav-link font-bold duration-200 text-gray-400 hover:text-white`}
        >
          LinkedIn
        </a>
        <span className="px-6 uppercase font-bold text-gray-400">|</span>
        <a
          href="https://github.com/mccannsean421"
          rel="nofollow"
          target="_blank"
          className={`uppercase nav-link font-bold duration-200 text-gray-400 hover:text-white`}
        >
          Github
        </a>
      </div>
    </nav>
  );
}
