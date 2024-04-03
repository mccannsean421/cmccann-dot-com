export default function ArticleTile({title, href, subtitle, description}) {
    return (
        <div className="pb-24">
            <a href={href} className="text-2xl" rel="nofollow" target="_blank">{title}</a>
            <p className="text-gray-400 py-3">{subtitle}</p>
            <p>{description}</p>
        </div>
    )
}