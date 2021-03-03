import { getAllPosts } from '@/lib/notion';

// Component
import Hero from '@/components/Hero';
import BlogPosts from '@/components/BlogPosts';
import { MotionBox } from '@/utils/animation';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

function BlogListing({ posts }) {
  return (
    <MotionBox exit={{ opacity: 0 }}>
      <Hero center>All Posts.</Hero>
      <BlogPosts posts={posts} />
    </MotionBox>
  );
}

export default BlogListing;
