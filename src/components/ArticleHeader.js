// Render Article Meta Data
export function ArticleHeader({ meta }) {
    return (
        <div className="container mx-auto max-w-4xl pb-12" data-testid="article-header">
            <h1 className="text-5xl py-6">{meta.title}</h1>
            <p>{meta.publishDate}</p>
        </div>
    );
}