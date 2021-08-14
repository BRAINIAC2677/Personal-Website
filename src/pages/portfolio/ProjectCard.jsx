import Tag from "./Tag";

function ProjectCard(props) {
  const { name, description, tags, imageURL, link } = props.data;
  const tagItems = tags.map((tag, index) => {
    return <Tag key={index} tag={tag}></Tag>;
  });
  return (
    <div className="lg:flex h-80 sm:h-96 lg:h-60 w-64 lg:w-100 my-4 sm:m-4 border-2 border-secondary bg-primary-light text-ink shadow-right-bottom transition duration-500 hover:transform hover:scale-105">
      <img
        className="h-2/6 sm:h-2/5 lg:h-full w-full lg:w-1/2 object-cover"
        src={imageURL}
        alt=""
      />
      <div className="flex flex-col justify-between h-4/6 sm:h-3/5 lg:h-full p-3">
        <div className="flex space-x-2">{tagItems}</div>
        <p className="font-semibold sm:text-lg uppercase">{name}</p>
        <p className="text-sm sm:text-base">{description}</p>
        <a className="btn self-center" href={link}>
          Explore
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
