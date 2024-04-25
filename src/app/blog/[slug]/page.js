import { getPostBySlug } from "@/app/lib";
import navigation from "next/navigation";

export default function BlogPostPage() {
   
    console.log(navigation);
    const post = getPostBySlug()
    
    return <>
        <h1>This is a blog post</h1>
        <article className="prose">
        </article>
    </>
 }