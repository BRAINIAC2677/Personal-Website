function MainContent() {
  return (
    <div className="center flex flex-col sm:flex-row-reverse justify-center sm:justify-around items-center sm:w-3/4">
      <img
        className="h-72 w-72 lg:h-96 lg:w-96 rounded-full object-cover"
        src="./images/hero.png"
        alt="image"
      />
      <p className="pt-4 sm:pt-0 sm:pr-8 text-lg text-center uppercase">
        hello, i'm <span className="block text-2xl">asif azad</span>cse freshmen
      </p>
    </div>
  );
}

export default MainContent;
