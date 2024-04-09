import ArticleTile from "@/components/ArticleTile"

export const metadata = {
    title: 'My Work | Cormac McCann',
    description: '...',
  }

export default function Page() {
    const jobs = [{
            title: "Rent the Runway",
            subtitle: "Senior Engineer",
            href: "https://renttherunway.com",
            description: "I started my journey at Rent the Runway as a frontend engineer working on internal services before progresing to a fullstack role where I worked with React, Nest JS, Springboot and Kotlin"
        },
        {
            title: "Shipyard Technology Ventures",
            subtitle: "Frontend Engineer",
            href: "https://www.shipyardtech.com/",
            description: "I worked primarily as a frontend engineer while at Shipyard, working primarily with Vue JS"
        },
        {
            title: "Bookies.com",
            subtitle: "Frontend Engineer",
            href: "https://www.bookies.com/",
            description: "I worked primarily as a frontend engineer while at Shipyard, working primarily with Vue JS"
        },
        {
            title: "Gambling.com",
            subtitle: "Frontend Engineer",
            href: "https://www.gambling.com/",
            description: "I worked primarily as a frontend engineer while at Shipyard, working primarily with Vue JS"
        }
    ];

    const jobTiles = () => jobs.map((job, index) => 
        <li key={`job-tile-${index}`}>
        <ArticleTile 
            title={job.title} subtitle={job.subtitle}
            href={job.href}
            description={job.description}
        /></li>)
    
    return (
        <main className="grid items-center h-full p-12 max-w-4xl my-0 mx-auto">
            <h1 className="text-4xl uppercase pb-24">My Work</h1>

            <ul>
                {jobTiles()}
            </ul>   
        </main>
    )
}