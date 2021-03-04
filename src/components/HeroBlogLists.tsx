import { BiNews } from 'react-icons/bi';

const HeroBlogLists = () => {
  console.log();
  return (
    <div className="py-16 lg:py-20">
      <div>
        <BiNews size="48" />
      </div>
      <h1 className="font-body font-semibold text-primary dark:text-white text-4xl md:text-5xl lg:text-6xl pt-5">
        Blog
      </h1>
      <div className="sm:w-3/4 pt-3">
        <p className="font-body font-light text-primary dark:text-white text-xl">
          Articles, tutorials, snippets, rants, and everything else. Subscribe
          for updates as they happen.
        </p>
      </div>
      <form className="py-12 flex flex-col sm:flex-row">
        <input
          type="email"
          id="subscribe"
          placeholder="Drop that email here…"
          className="w-full sm:w-1/2 bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary border border-primary dark:border-secondary transition-colors"
        />
        <button
          type="submit"
          className="px-10 py-4 bg-secondary hover:bg-green font-body font-semibold text-white text-xl md:text-2xl mt-5 sm:mt-0"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default HeroBlogLists;
