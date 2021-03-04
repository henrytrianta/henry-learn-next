import { Post } from '@/lib/notion';

const HeroBlog = ({ post }: { post: Post }) => {
  console.log();
  return (
    <div className="pt-16 lg:pt-20">
      <div className="border-b border-grey-lighter pb-8 sm:pb-12">
        {post.tag.map((t) => (
          <span className="font-body text-green text-sm inline-block bg-green-light mb-5 sm:mb-8 px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
        <h2 className="font-body font-semibold text-primary dark:text-white text-3xl sm:text-4xl md:text-5xl block leading-tight">
          {post.title}
        </h2>
        <div className="flex items-center pt-5 sm:pt-8">
          <p className="font-body font-light text-primary dark:text-white pr-2">
            {post.date}
          </p>
          <span className="font-body text-grey vdark:text-white">/</span>
          <p className="font-body font-light text-primary dark:text-white pl-2">
            4 min read
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
