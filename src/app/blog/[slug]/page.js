import { getPostBySlug } from "@/app/lib";
import MdxLayout from "@/app/mdx-layout";
import { ArticleHeader } from "@/components/ArticleHeader";

export async function getPageContent(slug) {
    const post = await getPostBySlug(slug);
    return post;
}

export default async function BlogPostPage({params}) {
    const slug = params.slug;
    const { content, meta } = await getPageContent(slug);
    
    return <>
        <ArticleHeader meta={meta} />
        <MdxLayout>
            { content }
        </MdxLayout>
    </>
 }