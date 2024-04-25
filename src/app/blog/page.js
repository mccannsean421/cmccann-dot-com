import Link from "next/link";
import getAllPosts from "../lib";

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <>
            <h1>Blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}><Link href={`/blog/${post.slug}`}>{post.meta.title}</Link></li>
                ))}
            </ul>
        </>
    );
}