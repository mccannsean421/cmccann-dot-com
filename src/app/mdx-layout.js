export default function MdxLayout({ children }) {
    // Create any shared layout or styles here
    return (
      <main className="min-h-full">
        <div className="container mx-auto max-w-4xl min-h-screem">
          <article
            className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl py-6 prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
            {children}
          </article>
        </div>
      </main>
    )
  }