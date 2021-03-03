import Link from 'next/link';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useTheme } from 'next-themes';

type Menus = {
  link: string;
  text: string;
};

const Header = () => {
  const { theme, setTheme } = useTheme();
  const menus: Menus[] = [
    {
      link: `/intro`,
      text: `Intro`,
    },
    {
      link: `/blog`,
      text: `Blog`,
    },
    {
      link: `/uses`,
      text: `Uses`,
    },
    {
      link: `/contact`,
      text: `Contact`,
    },
  ];

  function getColorMode() {
    return theme;
  }

  function setColorMode(propTheme = getColorMode()) {
    const isColor = propTheme;
    if (isColor === `light`) {
      setTheme(`dark`);
    } else {
      setTheme(`light`);
    }
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-6 lg:py-10">
        <Link href="/">
          <a className="flex items-center">
            <span className="mr-2">
              <img src="favicon.ico" alt="logo" />
            </span>
            <p className="font-body font-bold text-2xl text-primary dark:text-white hidden lg:block">
              Henry
            </p>
          </a>
        </Link>
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="text-3xl text-primary dark:text-white cursor-pointer mr-8"
            onClick={() => {
              setColorMode();
            }}
          >
            {getColorMode() === `light` ? <BiMoon /> : <BiSun />}
          </button>
          <svg
            width={24}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
            // onClick="isMobileMenuOpen = true"
            className="fill-current text-primary dark:text-white"
          >
            <g fillRule="evenodd">
              <rect width={24} height={3} rx="1.5" />
              <rect x={8} y={6} width={16} height={3} rx="1.5" />
              <rect x={4} y={12} width={20} height={3} rx="1.5" />
            </g>
          </svg>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            {menus.map((menu) => (
              <li key={menu.text} className="mr-6 relative group mb-1">
                <div className="absolute left-0 bottom-0 w-full transition-all h-0 group-hover:h-2 group-hover:bg-yellow opacity-75 z-20" />
                <Link href={menu.link} passHref>
                  <a className="font-body font-medium text-lg text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-yellow-200 px-2 z-30 block relative transition-colors">
                    {menu.text}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="text-3xl text-primary dark:text-white cursor-pointer"
                onClick={() => {
                  setColorMode();
                }}
              >
                {getColorMode() === `light` ? <BiMoon /> : <BiSun />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
