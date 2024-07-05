import { getPostBySlug } from "@/app/lib";
import MdxLayout from "@/app/mdx-layout";
import { ArticleHeader } from "@/components/ArticleHeader";
import Head from "next/head";

export async function getPageContent(slug) {
  const post = await getPostBySlug(slug);
  return post;
}

export default async function BlogPostPage({ params }) {
  const slug = params.slug;
  const { content, meta } = await getPageContent(slug);

  const dynamicMetadata = {
    title: meta.title || "My Work | Cormac McCann",
    description: meta.description || "...",
  };

  return (
    <>
      <Head>
        <title>{dynamicMetadata.title}</title>
        <meta name="description" content={dynamicMetadata.description} />
      </Head>
      <MdxLayout>
        <ArticleHeader meta={meta} />
        <div>{content}</div>
      </MdxLayout>
    </>
  );
}
