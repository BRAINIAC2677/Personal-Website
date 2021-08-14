function PageTitle(props) {
  const { title } = props;
  return (
    <div className="relative my-8 text-secondary">
      <p className="font-permanent-marker text-3xl sm:text-4xl text-center sm:tracking-wider">
        {title}
      </p>
      <p className="center font-permanent-marker text-5xl sm:text-6xl text-center sm:tracking-widest opacity-20">
        {title}
      </p>
      <div className="hidden sm:block mx-auto mt-2 w-20 h-1 bg-accent"></div>
    </div>
  );
}

export default PageTitle;
