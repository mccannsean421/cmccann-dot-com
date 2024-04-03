import Image from "next/image";

export default function Home() {
  return (
    <div className="content-container">
    <main className="grid items-center h-full">
      <div className="hero lg:pl-24 text-center lg:text-left">
        <h1 className="text-3xl lg:text-7xl">Hi, I&apos;m Cormac McCann</h1>
        <h2 className="py-6">Developer - Fantasy Nerd - Occasional Hiker</h2>
        <div>
          <button className="hover:border-gray-400 hover:text-gray-400 font-semibold py-2 px-4 border border-white rounded duration-200 mr-3 hero-btn">See My Work</button>
          <button className="hover:border-gray-400 hover:text-gray-400 font-semibold py-2 px-4 border border-white rounded duration-200 hero-btn">Get In Touch</button>
        </div>
      </div>
    </main>
    </div>
  );
}
