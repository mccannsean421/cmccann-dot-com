import Link from "next/link";

export default function ArticleTile({ title, href, subtitle, description }) {
  return (
    <div className="pb-12" data-testid="article-tile">
      <a href={href} rel="no-follow">
        <h3 className="text-white text-5xl pb-6 -skew-x-3 font-bold">
          {title}
        </h3>
      </a>
      <h4 className="text-xl">{subtitle}</h4>
      <p className="text-white py-6 text-xl md:text-3xl">{description}</p>
      <hr />
    </div>
  );
}
