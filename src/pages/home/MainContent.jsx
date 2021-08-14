function MainContent() {
  return (
    <div className="center flex flex-col sm:flex-row-reverse justify-center sm:justify-around items-center mt-12 lg:mt-20 sm:w-3/4">
      <div className="relative">
        <div className="absolute top-1/3 left-1/2 h-80 w-80 lg:h-96 lg:w-96 rounded-full bg-secondary transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute center h-60 w-60 lg:h-72 lg:w-72 rounded-full bg-primary-dark"></div>
        </div>
        <img
          className="relative h-72 w-72 lg:h-96 lg:w-96  object-cover z-10"
          src="./images/hero.png"
          alt="image"
        />
      </div>
      <p className="pt-4 sm:pt-0 sm:pr-8 text-lg text-center sm:text-left text-ink uppercase tracking-wider z-10">
        hello, i'm
        <span className="block py-2 text-4xl sm:text-5xl tracking-widest">
          asif azad
        </span>
        cse freshmen
      </p>
    </div>
  );
}

export default MainContent;
