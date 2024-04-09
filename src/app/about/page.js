import Image from "next/image"


export const metadata = {
    title: 'About me | Cormac McCann',
    description: '...',
  }

export default function Page() {
    return (
        <main className="grid items-center h-full p-12 max-w-4xl my-0 mx-auto">
            <h1 className="text-2xl lg:text-4xl uppercase font-bold pb-24">A wee bit about me</h1>

            <p className="pb-8">Just a totally regular guy...</p>

            {/* <Image src="/me.jpg" alt="Awesome looking couple" width="700" height="700"/> */}


            <h2 className="text-2xl uppercase pb-8 font-bold">The backstory</h2>
            <p className="pb-3">
                Originally form Kildare, Ireland I spent a number of years living in Dublin 
                before moving back to Kildare to buy my first home with my Fiancee Jenny. We&apos;re currently in
                The middle of renovating that house while trying to plan our wedding so ur life is a little bit chaotic...
            </p>

            <h2 className="text-2xl uppercase pb-8 font-bold">The outdoora</h2>
            <p className="pb-8">
                If I wasn&apos;t a developer I would have loved a job that would get me out in nature.
                Any time I have a free morning and the weather is good enough I love to go for a hike 
                or a long walk in any of the trails Ireland has to offer.
            </p>


            <h2 className="text-2xl uppercase pb-8 font-bold">I love music</h2>
            <p className="pb-3">
                I love listening as well as playing. I play regular guitar and bass, 
                tried learning piano many years ago but my hands are too clumsy. 
                I listen to many different genres but always come back to rock/metal.
                Right now my favourite back is The Warning, highly recommend you check them out. 
            </p>

            <p className="pb-3">At the start of 2024 we made the decision to take home a little fur baby. Her name is Laika and she is equal parts angel and absolute gremlin.</p>
        </main>
    )
}