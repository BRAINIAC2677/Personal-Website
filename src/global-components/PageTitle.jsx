function PageTitle(props) {
  const { title } = props;
  return (
    <div className="relative my-8 text-secondary">
      <p className="text-3xl sm:text-4xl text-center">{title}</p>
      <p className="center text-5xl sm:text-6xl text-center sm:tracking-widest opacity-10">
        {title}
      </p>
    </div>
  );
}

export default PageTitle;
