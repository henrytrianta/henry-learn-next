import { BiChevronRightCircle, BiSelectMultiple } from 'react-icons/bi';

const Data = [
  {
    title: `Tailwind`,
    desc: `Description`,
  },
  {
    title: `Tailwind`,
    desc: `Description`,
  },
  {
    title: `Tailwind`,
    desc: `Description`,
  },
  {
    title: `Tailwind`,
    desc: `Description`,
  },
];

const MyProjectList = () => (
  <div className="pb-16 lg:pb-20">
    <div className="flex items-center pb-6">
      <BiSelectMultiple
        size="32"
        className="fill-current text-primary dark:text-white"
      />
      <h3 className="font-body font-semibold text-primary dark:text-white text-2xl ml-3">
        My Projects
      </h3>
    </div>
    <div>
      {Data.map(() => (
        <a
          href="index.html"
          className="px-4 sm:px-6 py-4 border border-grey-lighter flex justify-between items-center mb-6"
        >
          <span className="w-9/10 pr-8">
            <h4 className="font-body font-semibold text-primary dark:text-white text-lg">
              TailwindCSS
            </h4>
            <p className="font-body font-light text-primary dark:text-white">
              Rapidly build modern websites without ever leaving your HTML.
            </p>
          </span>
          <span className="w-1/10">
            <BiChevronRightCircle className="mx-auto fill-current text-primary dark:text-white" />
          </span>
        </a>
      ))}
    </div>
  </div>
);

export default MyProjectList;
