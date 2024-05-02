// Render Article Meta Data
import { PageHeader } from "./PageHeader";

export function ArticleHeader({ meta }) {
    return (
        <div className="container mx-auto max-w-4xl pb-12" data-testid="article-header">
            <PageHeader title={meta.title}/>
            <p className="text-gray-400">{meta.publishDate}</p>
        </div>
    );
}