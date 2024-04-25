import Image from "next/image";
import Link from "next/link";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function Home() {
  return (
    <div className="content-container">
    <main className="h-full">
      <div className="hero grid items-center h-full">
      <div className="text-center">
        <BackgroundAnimation />
        <h1 className="text-3xl lg:text-7xl font-bold uppercase italic">Cormac McCann</h1>
        {/* <div className="glitch-animation">Cormac McCann</div> */}

        <h2 className="py-12 text-xl text-gray-400">Web Developer - Gamer - Music Nerd - Occasional Hiker</h2>
        <div>
          <Link className="hover:border-gray-400 hover:text-gray-400 font-semibold py-2 px-4 border border-white rounded duration-200 mr-3 hero-btn" href="/work">See My Work</Link>
          <Link className="hover:border-gray-400 hover:text-gray-400 font-semibold py-2 px-4 border border-white rounded duration-200 hero-btn" href="/contact">Say Hi</Link>
        </div>
      </div>
      </div>
    </main>
    </div>
  );
}
