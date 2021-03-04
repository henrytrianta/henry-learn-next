import get from 'axios';
import { getAllPosts, Post } from '@/lib/notion';
import { GetStaticPaths, GetStaticProps } from 'next';

// Component
import Hero from '@/components/Hero';
import BlogPostSingle from '@/components/BlogPost';
import { MotionBox } from '@/utils/animation';
import HeroBlog from '@/components/HeroBlog';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((_post) => _post.slug === params?.slug);

  const blocks = await get(
    `https://notion-api.splitbee.io/v1/page/${post?.id}`,
  ).then((res) => res.data);

  return {
    props: {
      blocks,
      post,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const table = await getAllPosts();
  return {
    paths: table.map((row) => `/blog/${row.slug}`),
    fallback: true,
  };
};

const BlogPost = ({
  post,
  blocks,
}: {
  post: Post;
  blocks: Record<string, unknown>;
}): JSX.Element => {
  if (!post) return <></>;

  return (
    <MotionBox exit={{ opacity: 0 }}>
      <div className="container mx-auto">
        <HeroBlog post={post} />
        <BlogPostSingle blocks={blocks} />
      </div>
    </MotionBox>
  );
};

export default BlogPost;
