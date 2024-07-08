"use client";

// Render Article Meta Data
import { PageHeader } from "./PageHeader";

export function ArticleHeader({ meta }) {
  const { title, publishDate, author } = meta;

  function handleCopy() {
    console.log("copy");
  }

  return (
    <div
      className="container mx-auto max-w-4xl pb-12"
      data-testid="article-header"
    >
      <PageHeader title={title} />
      <div className="grid justify-items-center">
        <div>
          <time datetime={publishDate} className="text-gray-400">
            {meta.publishDate}
          </time>
          <span className="text-gray-300 px-6">|</span>
          <span>{author}</span>
          <span className="text-gray-300 px-6">|</span>
          <button className="underline" onClick={() => handleCopy()}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
