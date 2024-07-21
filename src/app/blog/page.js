// import Link from "next/link";
import getAllPosts from "../lib";
import ArticleTile from "@/components/ArticleTile";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Web Development Blog | Cormac McCann",
  description:
    "My web development blog. Frontend, backend, fullstack there is something here for everyone",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="container mx-auto max-w-4xl py-12">
        <PageHeader title="My Chaotic Blog" />
        <div className="pt-24">
          <div className="py-12 px-6 md:px-24 bg-[rgba(0,0,0,0.5)]">
            <ul>
              {posts.map((post) => (
                <li key={post.slug} className="text-white">
                  <ArticleTile
                    title={post.meta.title}
                    href={`/blog/${post.slug}`}
                    subtitle={post.meta.publishDate}
                    description={
                      post.meta.description ?? "this is a description"
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
