// import Link from "next/link";
import getAllPosts from "../lib";
import ArticleTile from "@/components/ArticleTile";

export default async function BlogPage() {
    const posts = await getAllPosts();
    console.log(posts);
    return (
        <>
            <div className="container mx-auto max-w-4xl">
            <h1 className="text-2xl lg:text-4xl pb-6 uppercase font-bold">My Chaotic Blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.slug} className="text-white">
                        <ArticleTile
                            title={post.meta.title}
                            href={`/blog/${post.slug}`}
                            subtitle={post.meta.subtitle ?? "This is a subtitle"}
                            description={post.meta.description ?? "this is a description"}
                        />
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}