import Link from "next/link";

export default function ArticleTile({title, href, subtitle, description}) {
    return (
        <div className="pb-12" data-testid="article-tile">
            <a href={href} rel="no-follow"><h3 className="text-white text-3xl pb-6 -skew-x-3 uppercase font-bold">{title}</h3></a>
            <h4>{subtitle}</h4>
            <p className="text-white py-6 text-lg">
            {description}
            </p>
            <hr />
        </div>
    )
}