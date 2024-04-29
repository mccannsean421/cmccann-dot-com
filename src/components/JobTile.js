import Link from "next/link";

export default function JobTile({title, href, description}) {
    return (
        <div className="mb-12 border-2 border-solid p-6 rounded">
            <Link href={href} className="text-3xl font-bold ">
                <h2 className="pb-6">{title}</h2>
            </Link>
            <p className="text-lg text-gray-600">{description}</p>
        </div>
    )
}