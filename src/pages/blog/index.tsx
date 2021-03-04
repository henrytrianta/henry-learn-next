import { getAllPosts, Post } from '@/lib/notion';

// Component
import { MotionBox } from '@/utils/animation';
import HeroBlogLists from '@/components/HeroBlogLists';
import BlogLists from '@/components/BlogLists';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

function BlogListing({ posts }: { posts: Post[] }) {
  return (
    <MotionBox exit={{ opacity: 0 }}>
      <div className="container mx-auto">
        <HeroBlogLists />
        <BlogLists posts={posts} />
        {/* <BlogPosts posts={posts} /> */}
      </div>
    </MotionBox>
  );
}

export default BlogListing;
