import { getPostBySlug } from "@/app/lib";
import MdxLayout from "@/app/mdx-layout";
import { ArticleHeader } from "@/components/ArticleHeader";
import Head from "next/head";

export async function getPageContent(slug) {
  const post = await getPostBySlug(slug);
  return post;
}

export async function generateMetadata({params}) {
  const { meta } = await getPageContent(params.slug);

  return {
    title: meta.title,
  }
}

export default async function BlogPostPage({ params }) {
  const slug = params.slug;
  const { content, meta } = await getPageContent(slug);

  return (
    <>
      <MdxLayout>
        <ArticleHeader meta={meta} />
        <div>{content}</div>
      </MdxLayout>
    </>
  );
}
