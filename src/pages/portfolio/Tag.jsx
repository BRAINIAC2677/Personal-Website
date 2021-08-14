function Tag(props) {
  const { tag } = props;
  return (
    <div className="p-1 rounded-sm bg-secondary font-medium text-ink text-xs capitalize">
      {tag}
    </div>
  );
}

export default Tag;
