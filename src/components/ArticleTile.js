import Link from "next/link";

export default function ArticleTile({title, href, subtitle, description}) {
    return (
        <div className="pb-24">
            <Link href={href} className="text-2xl">
                <h2>{title}</h2>
            </Link>
            <p className="text-gray-400 py-3">{subtitle}</p>
            <p>{description}</p>
        </div>
    )
}