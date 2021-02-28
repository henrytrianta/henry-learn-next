import { getAllPosts } from '@/lib/notion';

// Component
import Hero from '@/components/Hero';
import BlogPosts from '@/components/BlogPosts';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts
    },
    revalidate: 1
  };
}

function BlogListing({ posts }) {
  return (
    <>
      <Hero center>All Posts.</Hero>
      <BlogPosts posts={posts} />
    </>
  );
}

export default BlogListing;
