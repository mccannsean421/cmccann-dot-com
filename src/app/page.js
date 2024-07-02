import Image from "next/image";
import Link from "next/link";
import { PT_Serif, Noto_Serif } from "next/font/google";
import ContactForm from "@/components/ContactForm";

const ptSerif = Noto_Serif({ subsets: ["latin"], weight: ["700"] });

export default function Home() {

  return (
    <div className="content-container">
    <main>
      <div className="hero grid justify-items-center">

        <div className="platform p-12 my-36 max-w-4xl w-full text-center">
          <h1 className={`text-5xl lg:text-8xl font-bold text-white pb-6`}>Cormac McCann</h1>
          <h2 className="py-6 text-3xl lg:text-5xl text-gray-300 uppercase -skew-x-3">
            I build cool things on the web
          </h2>
          {/* <div>
            <p className="text-lg text-gray-200 pl-12">and other things too</p>
          </div> */}
        </div>
      </div>
    

      <div className="px-6 md:px-24 pb-24 grid justify-items-center">
        <h2 className="text-3xl uppercase font-bold capitalize text-white pb-24 w-full text-center -skew-x-3">About me</h2>
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
        <h2 className="text-3xl uppercase font-bold capitalize text-white w-full text-center ">Get In Touch</h2>
      </div>

      <div className="rounded max-w-[770px] px-24 py-12 bg-[rgba(0,0,0,0.5)] ">
        <ContactForm />
      </div>

    </main>
    </div>
  );
}
