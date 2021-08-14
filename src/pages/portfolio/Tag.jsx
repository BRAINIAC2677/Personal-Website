function Tag(props) {
  const { tag } = props;
  return (
    <div className="p-1 rounded-sm bg-green-600 text-xs capitalize">{tag}</div>
  );
}

export default Tag;
