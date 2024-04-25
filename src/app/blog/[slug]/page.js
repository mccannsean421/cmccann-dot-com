import { getPostBySlug } from "@/app/lib";
import MdxLayout from "@/app/mdx-layout";

export async function getPageContent(slug) {
    const post = await getPostBySlug(slug);
    return post;
}

export default async function BlogPostPage({params}) {
    const slug = params.slug;
    const { content } = await getPageContent(slug);
    
    return <>
        <MdxLayout>
            { content }
        </MdxLayout>
    </>
 }