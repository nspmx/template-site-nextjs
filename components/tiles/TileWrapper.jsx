import Tile from "./TileItem";

function TileWrapper(props) {
  const {
    members, href, onClick,
  } = props;

  if (!members[0]) return "";

  const item = members[0];

  return (
    <Tile
      key={item.id}
      link={href}
      onClick={onClick}
      background={item.image.src}
      title={item.name}
      subtitle={item.variant}
      id={item.original_id}
    />
  );
}

export default TileWrapper;
