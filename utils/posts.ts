import matter from "gray-matter";
// import fs from "fs";
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://admin.justinmenestrina.com',
  key: '03311ae29df08c7bb55dfcf308',
  version: "v3"
});


export async function getGhostPosts() {
  const settings = await api.settings.browse({ limit: 'all ' })
  return await api.posts.browse({
    limit: 'all'
  }).catch(err => console.error(err))
}

export async function getSingleGhostPost(slug: string) {
  return await api.posts.read({ slug }).catch(console.error)
}

// export function getPostsFolders() {
//   // Get all posts folders located in `content/posts`
//   const postsFolders = fs
//     .readdirSync(`${process.cwd()}/content/posts`)
//     .map((folderName) => ({
//       directory: folderName,
//       filename: `${folderName}.md`,
//     }));

//   return postsFolders;
// }

// Get day in format: Month day, Year. e.g. April 19, 2020
// function getFormattedDate(date) {
//   const options = { year: "numeric", month: "long", day: "numeric" };
//   const formattedDate = date.toLocaleDateString("en-US", options);

//   return formattedDate;
// }

// export function getSortedPosts() {
//   const postFolders = getPostsFolders();

//   const posts = postFolders
//     .map(({ filename, directory }) => {
//       // Get raw content from file
//       const markdownWithMetadata = fs
//         .readFileSync(`content/posts/${directory}/${filename}`)
//         .toString();

//       // Parse markdown, get frontmatter data, excerpt and content.
//       const { data, excerpt, content } = matter(markdownWithMetadata);

//       const frontmatter = {
//         ...data,
//         date: getFormattedDate(data.date),
//       };

//       // Remove .md file extension from post name
//       const slug = filename.replace(".md", "");

//       return {
//         slug,
//         frontmatter,
//         excerpt,
//         content,
//       };
//     })
//     .sort(
//       (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
//     );

//   return posts;
// }

// export function getPostsSlugs() {
//   const postFolders = getPostsFolders();

//   const paths = postFolders.map(({ filename }) => ({
//     params: {
//       slug: filename.replace(".md", ""),
//     },
//   }));

//   return paths;
// }

// export function getPostBySlug(slug) {
//   const posts = getSortedPosts();

//   const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

//   const { frontmatter, content, excerpt } = posts[postIndex];

//   const previousPost = posts[postIndex + 1];
//   const nextPost = posts[postIndex - 1];

//   return { frontmatter, post: { content, excerpt }, previousPost, nextPost };
// }
