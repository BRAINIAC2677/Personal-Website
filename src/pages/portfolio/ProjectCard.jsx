import Tag from "./Tag";

function ProjectCard(props) {
  const { name, description, tags, imageURL, link } = props.data;
  const tagItems = tags.map((tag, index) => {
    return <Tag key={index} tag={tag}></Tag>;
  });
  return (
    <div className="h-80 sm:h-96 w-64 my-4 sm:m-4 bg-primary-light text-ink transition duration-500 hover:transform hover:scale-105">
      <img
        className="h-2/6 sm:h-2/5 w-full object-cover"
        src={imageURL}
        alt=""
      />
      <div className="flex flex-col justify-between h-3/5 p-3">
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
