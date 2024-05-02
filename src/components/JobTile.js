import Link from "next/link";

export default function JobTile({title, href, description}) {
    return (
        <div className="pb-12">
        <a href={href} rel="no-follow"><h3 className="text-white text-2xl pb-6">{title}</h3></a>
        <p className="text-gray-300 pb-12">
          {description}
        </p>
        <hr />
        </div>
    )
}