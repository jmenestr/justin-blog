import { Layout, Image, SEO, Bio } from "@components/common";
import { PostsOrPages } from "@tryghost/content-api";
import { getGhostPosts, getSingleGhostPost } from "@utils/posts";

const Post: React.FC<any> = ({ ghostPostData }) => {
  return (
    <Layout>
      <style type="text/css">{`${ghostPostData.codeinjection_styles}`}</style>

      <div className='prose dark:prose-dark'>
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

export default Post;

export async function getStaticPaths() {
  // const paths = getPostsSlugs();
  const ghostPosts = await getGhostPosts();

  const paths = (ghostPosts as PostsOrPages).map((post: any) => ({
    params: { slug: post.slug },
  }))
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  // const postData = getPostBySlug(slug);
  const ghostPostData = await getSingleGhostPost(slug)
  // if (!postData.previousPost) {
  //   postData.previousPost = null;
  // }

  // if (!postData.nextPost) {
  //   postData.nextPost = null;
  // }
  return { props: { ghostPostData } };
}

