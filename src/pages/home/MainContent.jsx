function MainContent() {
  return (
    <div className="flex flex-col sm:flex-row-reverse justify-center sm:justify-around items-center mx-auto mt-12 lg:mt-20 sm:w-3/4">
      <div className="relative">
        <div className="absolute top-1/3 left-1/2 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-secondary transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute center h-40 w-40 sm:h-60 sm:w-60 lg:h-72 lg:w-72 rounded-full bg-primary-dark"></div>
        </div>
        <img
          className="relative h-72 w-72 lg:h-96 lg:w-96 object-cover z-10"
          src="./images/hero.png"
          alt="image"
        />
      </div>
      <div className="pt-4 sm:pt-0 sm:pr-8 text-md sm:text-lg text-center sm:text-left text-ink uppercase tracking-wider z-10">
        <p>hello i'am </p>
        <p className="py-2 font-permanent-marker text-3xl sm:text-5xl tracking-widest">
          asif azad
        </p>
        <p>cse freshmen</p>
        <a
          className="btn mt-4"
          href="https://drive.google.com/uc?export=download&id=1Dhn2giyFiY7vHmYRI0S0lCuXQUqBAssz"
          download="Resume.pdf"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default MainContent;
