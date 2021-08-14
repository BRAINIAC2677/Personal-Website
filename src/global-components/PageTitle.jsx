function PageTitle(props) {
  const { title } = props;
  return (
    <div className="relative my-8">
      <p className="text-4xl text-center">{title}</p>
      <p className="center text-6xl text-center opacity-10">{title}</p>
    </div>
  );
}

export default PageTitle;
