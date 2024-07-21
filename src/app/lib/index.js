import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "src/app", "posts");

export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, realSlug + ".mdx");

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return { meta: frontmatter, slug: realSlug, content };
};

export default async function getAllPosts() {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const post = await getPostBySlug(file);
    console.log(post);
    posts.push(post);
  }

  return posts;
}
