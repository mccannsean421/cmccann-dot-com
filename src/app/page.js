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
          <h1 className={`text-5xl lg:text-8xl font-bold text-white pb-6 -skew-x-3`}>Cormac McCann</h1>
          <h2 className="py-6 text-3xl lg:text-5xl text-gray-300 -skew-x-3">
            I build cool things on the web
          </h2>
        </div>
      </div>
    

      <div className="px-6 md:px-24 pb-24 grid justify-items-center">
        <h2 className="text-3xl uppercase font-bold capitalize text-white pb-24 w-full text-center -skew-x-3">Who am I?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-[500px] gap-10 items-center">
        <div>
          <Image src="/meself.jpg" height="500" width="300" alt="Irish lad wearing a ski mask"/>
        </div>
        <p className="text-white text-xl">
          Hey, I&apos;m Cormac nice to meet you! I&apos;m a web developer 
          with almost 10 years epxerience working across a wide range of industries.
        </p>

        </div>
      </div>

      <div className="pt-24 pb-6 md:py-24">
        <h2 className="text-3xl uppercase font-bold capitalize text-white w-full text-center ">Get In Touch</h2>
      </div>

      <div>
      <div className="rounded max-w-[770px] px-6 md:px-24 py-12 md:bg-[rgba(0,0,0,0.5)] mx-auto ">
        <ContactForm />
      </div>
      </div>

    </main>
    </div>
  );
}
