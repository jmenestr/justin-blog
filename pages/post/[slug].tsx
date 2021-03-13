import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

import { Layout, Image, SEO, Bio } from "@components/common";
import { getGhostPosts, getPostBySlug, getPostsSlugs, getSingleGhostPost } from "@utils/posts";

export default function Post({ ghostPostData }) {
  return (
    <Layout>
      <style type="text/css">{`${ghostPostData.codeinjection_styles}`}</style>

      <div className='prose'>
        <h1>{ghostPostData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: ghostPostData.html }} />
      </div>
      {/*

      <nav className="flex flex-wrap justify-between mb-10">
        {previousPost ? (
          <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
            <a className="text-lg font-bold">
              ← {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
            <a className="text-lg font-bold">{nextPost.frontmatter.title} →</a>
          </Link>
        ) : (
          <div />
        )} */}
      {/* </nav> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  // const paths = getPostsSlugs();
  const ghostPosts = await getGhostPosts();

  const paths = ghostPosts.map((post) => ({
    params: { slug: post.slug },
  }))
  console.log(paths)
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // const postData = getPostBySlug(slug);
  const ghostPostData = await getSingleGhostPost(slug)
  // if (!postData.previousPost) {
  //   postData.previousPost = null;
  // }

  // if (!postData.nextPost) {
  //   postData.nextPost = null;
  // }
  console.log(ghostPostData, slug)
  return { props: { ghostPostData } };
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    webpSrc={require(`../../content/assets/${src}?webp`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);
