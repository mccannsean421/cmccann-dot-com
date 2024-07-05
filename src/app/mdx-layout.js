export default function MdxLayout({ children }) {
  // Create any shared layout or styles here
  return (
    <main className="min-h-full">
      <div className="container mx-auto min-h-screem">
        <article className="text-white prose prose-headings:text-white prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl py-6 prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg mx-auto prose-p:text-2xl lg:min-w-[700px]">
          {children}
        </article>
      </div>
    </main>
  );
}
