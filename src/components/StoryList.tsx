import { BiMessageRoundedDetail, BiRightArrowAlt } from 'react-icons/bi';

const StoryList = () => {
  console.log();
  return (
    <div className="py-16 lg:py-20">
      <div className="flex items-center pb-6">
        <BiMessageRoundedDetail
          className="fill-current text-primary dark:text-white"
          size="32"
        />
        <h3 className="font-body font-semibold text-primary dark:text-white text-2xl ml-3">
          My Story
        </h3>
        <a
          href="blog.html"
          className="flex items-center pl-10 font-body italic text-green dark:text-green-light transition-colors dark:hover:text-secondary hover:text-secondary"
        >
          All posts
          <BiRightArrowAlt size="16" className="ml-3" />
        </a>
      </div>
      <div className="pt-8">
        <div className="border-b border-grey-lighter pb-8">
          <span className="font-body text-green text-sm inline-block bg-green-light mb-4 px-2 py-1 rounded-full">
            category
          </span>
          <a
            href="post.html"
            className="font-body font-semibold text-primary dark:text-white transition-colors dark:hover:text-secondary hover:text-green text-lg block"
          >
            Quis hendrerit dolor magna eget est lorem ipsum dolor sit
          </a>
          <div className="flex items-center pt-4">
            <p className="font-body font-light text-primary dark:text-white pr-2">
              July 19, 2020
            </p>
            <span className="font-body text-grey dark:text-white">/</span>
            <p className="font-body font-light text-primary dark:text-white pl-2">
              4 min read
            </p>
          </div>
        </div>
        <div className="border-b border-grey-lighter pt-10 pb-8">
          <div className="flex items-center">
            <span className="font-body text-blue-dark text-sm inline-block bg-red-100 mb-4 px-2 py-1 rounded-full">
              category
            </span>
            <span className="font-body text-yellow-dark text-sm inline-block bg-yellow-100 mb-4 px-2 py-1 rounded-full ml-4">
              category
            </span>
          </div>
          <a
            href="post.html"
            className="font-body font-semibold text-primary dark:text-white transition-colors dark:hover:text-secondary hover:text-green text-lg block"
          >
            Senectus et netus et malesuada fames ac turpis egestas integer
          </a>
          <div className="flex items-center pt-4">
            <p className="font-body font-light text-primary dark:text-white pr-2">
              June 30, 2020
            </p>
            <span className="font-body text-grey dark:text-white">/</span>
            <p className="font-body font-light text-primary pl-2 dark:text-white">
              5 min read
            </p>
          </div>
        </div>
        <div className="border-b border-grey-lighter pt-10 pb-8">
          <span className="font-body text-blue text-sm inline-block bg-blue-light mb-4 px-2 py-1 rounded-full">
            category
          </span>
          <a
            href="post.html"
            className="font-body font-semibold text-primary dark:text-white transition-colors dark:hover:text-secondary hover:text-green text-lg block"
          >
            Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies
          </a>
          <div className="flex items-center pt-4">
            <p className="font-body font-light text-primary dark:text-white pr-2">
              June 26, 2020
            </p>
            <span className="font-body text-grey dark:text-white">/</span>
            <p className="font-body font-light text-primary dark:text-white pl-2">
              3 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryList;
