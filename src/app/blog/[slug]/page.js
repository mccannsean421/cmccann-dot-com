import { getPostBySlug } from "@/app/lib";
import MdxLayout from "@/app/mdx-layout";
import { ArticleHeader } from "@/components/ArticleHeader";

export async function getPageContent(slug) {
    const post = await getPostBySlug(slug);
    return post;
}

export const metadata = {
    title: 'My Work | Cormac McCann',
    description: '...',
  }


export default async function BlogPostPage({params}) {
    const slug = params.slug;
    const { content, meta } = await getPageContent(slug);
    
    return <>
        
        <MdxLayout>
        <ArticleHeader meta={meta} />
            <div className="bg-white">
            { content }
            </div>
        </MdxLayout>
    </>
 }