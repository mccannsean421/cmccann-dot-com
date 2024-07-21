import JobTile from "@/components/JobTile";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "My Work | Cormac McCann",
  description:
    "A brief summary of just some of the web development roles I have had over the years",
};

export default function Page() {
  const jobs = [
    {
      title: "Rent the Runway",
      subtitle: "Senior Engineer",
      href: "https://renttherunway.com",
      description:
        "I started my journey at Rent the Runway as a frontend engineer working on internal services before progresing to a fullstack role where I worked with React, Nest JS, Springboot and Kotlin",
    },
    {
      title: "Shipyard Technology Ventures",
      subtitle: "Frontend Engineer",
      href: "https://www.shipyardtech.com/",
      description:
        "I worked primarily as a frontend engineer while at Shipyard. The focus of our team was delivering hi-quality proof of concept applications using mainly Vue JS. There was a wide variety of projects to work on.",
    },
    {
      title: "Bookies.com",
      subtitle: "Frontend Engineer",
      href: "https://www.bookies.com/",
      description:
        "I worked primarily as a frontend engineer while at Shipyard, working primarily with Vue JS",
    },
    {
      title: "Gambling.com",
      subtitle: "Frontend Engineer",
      href: "https://www.gambling.com/",
      description:
        "I worked primarily as a frontend engineer while at Shipyard, working primarily with Vue JS",
    },
  ];

  const jobTiles = () =>
    jobs.map((job, index) => (
      <li key={`job-tile-${index}`}>
        <JobTile
          title={job.title}
          subtitle={job.subtitle}
          href={job.href}
          description={job.description}
        />
      </li>
    ));

  return (
    <main className="grid items-center h-full p-6 md:p-12 md:max-w-4xl my-0 mx-auto">
      <PageHeader title="My Work" />
      <p data-testid="blurb" className="py-12 text-xl text-gray-200">
        {" "}
        I&apos;ve been working in development since 2015 and since then
        I&apos;ve on some amazing teams for some well known brands.
      </p>
      <div className="bg-[rgba(0,0,0,0.5)] p-6 md:p-24">
        <ul>{jobTiles()}</ul>
      </div>
    </main>
  );
}
