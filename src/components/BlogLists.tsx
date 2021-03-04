import { Post } from '@/lib/notion';
import Link from 'next/link';

const BlogLists = ({ posts }: { posts: Post[] }) => {
  console.log(posts);
  return (
    <>
      <div className="pt-8 lg:pt-12">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border-b border-grey-lighter pt-10 pb-8"
          >
            {post.tag.map((t) => (
              <span className="font-body text-black text-sm inline-block bg-primary-300 mb-4 px-2 py-1 rounded-full">
                {t}
              </span>
            ))}
            <Link href={`blog/${post.slug}`}>
              <a className="font-body font-semibold text-primary dark:text-white dark:hover:text-secondary hover:text-green transition-colors text-lg block">
                {post.title}
              </a>
            </Link>
            <div className="flex items-center pt-4">
              <p className="font-body font-light text-primary dark:text-white pr-2">
                {post.date}
              </p>
              <span className="font-body text-grey dark:text-white">/</span>
              <p className="font-body font-light text-primary dark:text-white pl-2">
                4 min read
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8 lg:pt-16 flex">
        <span className="cursor-pointer font-body font-medium text-secondary border-2 border-secondary px-3 py-1">
          1
        </span>
        <span className="cursor-pointer font-body font-medium text-primary dark:text-white dark:hover:text-secondary hover:text-secondary transition-colors border-2 border-primary dark:border-green-light dark:hover:border-secondary hover:border-secondary px-3 py-1 ml-3">
          2
        </span>
        <span className="cursor-pointer font-body font-medium text-primary dark:text-white dark:hover:text-secondary hover:text-secondary transition-colors border-2 border-primary dark:border-green-light dark:hover:border-secondary hover:border-secondary px-3 py-1 ml-3">
          3
        </span>
        <span className="cursor-pointer font-body font-medium text-primary dark:text-white group hover:text-secondary dark:hover:text-secondary transition-colors border-2 border-primary hover:border-secondary dark:border-green-light dark:hover:border-secondary px-3 py-1 ml-3 flex items-center">
          Next{` `}
          <i className="text-primary dark:text-white group-hover:text-secondary transition-colors bx bx-right-arrow-alt ml-1" />
        </span>
      </div>
    </>
  );
};

export default BlogLists;
