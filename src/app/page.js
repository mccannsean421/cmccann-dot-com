import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
    <main className="grid items-center h-full">
      <div className="hero pl-24">
        <h1 className="text-2xl">Hi, I&apos;m Cormac McCann</h1>
        <h2 className="py-6">Developer - Fantasy Nerd - Occasional Hiker</h2>
        <div>
          <button className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded mr-3">See My Work</button>
          <button className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded">Get In Touch</button>
        </div>
      </div>
    </main>
    </div>
  );
}
