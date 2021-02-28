import { get } from 'axios';
import { getAllPosts } from '@/lib/notion';

// Component
import Hero from '@/components/Hero';
import BlogPostSingle from '@/components/BlogPost';

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks = await get(`https://notion-api.splitbee.io/v1/page/${post.id}`).then(
    (res) => res.data
  );

  return {
    props: {
      blocks,
      post
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const table = await getAllPosts();
  return {
    paths: table.map((row) => `/blog/${row.slug}`),
    fallback: true
  };
}

const BlogPost = ({ post, blocks }) => {
  if (!post) return null;

  return (
    <>
      <Hero center>{post.title}</Hero>
      <BlogPostSingle blocks={blocks} />
    </>
  );
};

export default BlogPost;
