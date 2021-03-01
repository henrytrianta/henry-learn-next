const Hero = () => {
  console.log();
  return (
    <div className="border-b border-grey-lighter py-16 lg:py-20">
      <div>
        <img
          src="static/images/author.jpg"
          className="w-16 h-16"
          alt="author"
        />
      </div>
      <h1 className="font-body font-semibold text-primary dark:text-white text-4xl md:text-5xl lg:text-6xl pt-3">
        Hi, I’m Henry.
      </h1>
      <p className="font-body font-light text-primary dark:text-white text-xl pt-3">
        A software engineer and open-source advocate enjoying the sunny life in
        Barcelona, Spain.
      </p>
      <a
        href="index.html"
        className="mt-12 block sm:inline-block px-10 py-4 bg-secondary transition-colors hover:bg-secondary-700 font-body font-semibold text-white text-xl sm:text-2xl text-center sm:text-left"
      >
        Say Hello!
      </a>
    </div>
  );
};

export default Hero;
