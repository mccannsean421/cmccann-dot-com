import Image from "next/image";
import Link from "next/link";
import { PT_Serif, Noto_Serif } from "next/font/google";

const ptSerif = Noto_Serif({ subsets: ["latin"], weight: ["700"] });

export default function Home() {

  return (
    <div className="content-container">
    <main>
      <div className="hero grid justify-items-center">

      <div className="platform p-12 mt-24 max-w-4xl w-full">
        <h1 className={`text-xl lg:text-xl font-bold text-gray-400`}>Hi, I&apos;m Cormac McCann</h1>
        <h2 className="py-6 text-9xl text-white font-bold uppercase max-w-96">I build great websites</h2>
        <div>
          <p className="text-lg text-gray-200 pl-48">I create fast, well designed web applications</p>
        </div>
      </div>
    

      <div className="p-24">
        <h2 className="text-3xl uppercase font-bold capitalize text-white pb-24 w-full text-center ">About me</h2>
        <div className="p-12 content-block max-w-4xl">
          <div className="pb-12">
          <h3 className="text-white text-2xl pb-6">Who I am</h3>
          <p className="text-gray-300 pb-12">
            As mentioned above my name is Cormac and I am a web developer from Kildare, Ireland. 
            I&apos;ve been building first class applications since 2016 where I got my start building 
            static affiliate marketing websites. Over the years that grew into working on complex applications
            dealing with everything from sports odds to medical data, from native apps to e-commerce backends.
          </p>
          <hr />
          </div>
          <div className="text-right">
          <h3 className="text-white text-2xl pb-6">What I do</h3>
            <p className="text-gray-300 pb-12">
              As mentioned above my name is Cormac and I am a web developer from Kildare, Ireland. 
              I&apos;ve been building first class applications since 2016 where I got my start building 
              static affiliate marketing websites. Over the years that grew into working on complex applications
              dealing with everything from sports odds to medical data, from native apps to e-commerce backends.
            </p>
            <hr />
          </div>
          <div className="pt-12">
          <h3 className="text-white text-2xl pb-6">Why I do it</h3>
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

      <div className="p-24">
        <h2 className="text-3xl uppercase font-bold capitalize text-white pb-24 w-full text-center ">Want to Connect?</h2>
      </div>

      </div>
    </main>
    </div>
  );
}
