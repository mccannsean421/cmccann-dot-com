import Image from "next/image";
import Link from "next/link";
import { PT_Serif, Noto_Serif } from "next/font/google";

const ptSerif = Noto_Serif({ subsets: ["latin"], weight: ["700"] });

export default function Home() {

  return (
    <div className="content-container">
    <main className="">
      <div className="hero grid justify-items-center">

      <div className="platform p-12 mt-48">
        <h1 className={`text-3xl lg:text-7xl font-bold`}>Cormac McCann</h1>
        {/* <div className="glitch-animation">Cormac McCann</div> */}

        <h2 className="py-12 text-xl text-gray-400">Web Developer - Gamer - Music Nerd - Occasional Hiker</h2>
        <div>
          <Link className="hover:border-gray-400 hover:text-gray-400 font-semibold py-2 px-4 border border-white rounded duration-200 mr-3 hero-btn text-white" href="/work">See My Work</Link>
          <Link className="hover:border-gray-400 hover:text-gray-400 font-semibold py-2 px-4 border border-white rounded duration-200 hero-btn text-white" href="/contact">Say Hi</Link>
        </div>
      </div>

      <div className="p-24">
        <h2 className="text-3xl uppercase font-bold capitalize text-white pb-24 w-full text-center ">My Story</h2>
        <div className="p-12 content-block max-w-4xl">
          <div className="pb-12">
          <h3 className="text-white text-2xl pb-6">Who am I?</h3>
          <p className="text-gray-300 pb-12">
            As mentioned above my name is Cormac and I am a web developer from Kildare, Ireland. 
            I&apos;ve been building first class applications since 2016 where I got my start building 
            static affiliate marketing websites. Over the years that grew into working on complex applications
            dealing with everything from sports odds to medical data, from native apps to e-commerce backends.
          </p>
          <hr />
          </div>
          <div>
          <h3 className="text-white text-2xl pb-6">Who am I?</h3>
          <p className="text-gray-300 pb-12">
            As mentioned above my name is Cormac and I am a web developer from Kildare, Ireland. 
            I&apos;ve been building first class applications since 2016 where I got my start building 
            static affiliate marketing websites. Over the years that grew into working on complex applications
            dealing with everything from sports odds to medical data, from native apps to e-commerce backends.
          </p>
          <hr />
          </div>
        </div>
      </div>

      </div>
    </main>
    </div>
  );
}
