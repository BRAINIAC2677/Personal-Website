import Tag from "./Tag";

function ProjectCard(props) {
  const { name, description, tags, imageURL, link } = props.data;
  const tagItems = tags.map((tag, index) => {
    return <Tag key={index} tag={tag}></Tag>;
  });
  return (
    <div className="h-96 w-64 m-4 bg-primary-light text-ink transition duration-500 hover:transform hover:scale-105">
      <img className="h-2/5 w-full object-cover" src={imageURL} alt="" />
      <div className="flex flex-col justify-between  h-3/5 p-3">
        <div className="flex space-x-2">{tagItems}</div>
        <p className="font-semibold text-lg uppercase">{name}</p>
        <p>{description}</p>
        <button className="self-center">
          <a className="btn" href={link}>
            Explore
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
