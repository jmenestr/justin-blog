import Link from "next/link";
import { Layout, Bio, SEO } from "@components/common";
import { getGhostPosts } from "@utils/posts";
import dayjs from 'dayjs';


const Home: React.FC<any> = ({ ghostPosts }) => {
  console.log(ghostPosts)
  return (
    <Layout>
      <SEO title="All posts" />
      {/* <Bio className="my-14" /> */}
      <h1 className='mb-2 text-3xl font-display text-gray-500 dark:text-gray-300 '>All Posts</h1>
      {
        ghostPosts.map((post: any) => {
          console.log(post)
          return (
            <div key={post.id} className='mt-6 mb-12'>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a className='font-display text-lg font-bold'>{post.title}</a>
              </Link>
              <p className='font-mono text-gray-700 dark:text-gray-100 text-sm my-2'>
                {dayjs(post.published_at).format("MMMM D, YYYY")}  • {post.reading_time} min
              </p>
              <p>
                {post.excerpt}
              </p>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a className='text-neon-orange dark:text-yellow-400 mt-2 inline-block'>Continue Reading<span aria-hidden="true">→</span></a>
              </Link>
            </div>
          )
        })
      }

    </Layout>
  );
}

export default Home;

export async function getStaticProps() {
  // const posts = getSortedPosts();
  const ghostPosts = await getGhostPosts();
  return {
    props: {
      ghostPosts
    },
  };
}
