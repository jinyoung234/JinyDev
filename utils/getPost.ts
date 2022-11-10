import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getPost(category: string) {
  const files = fs.readdirSync(path.join(`./posts/${category}`));
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join(`./posts/${category}`, filename), "utf-8");
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    posts,
  };
}
