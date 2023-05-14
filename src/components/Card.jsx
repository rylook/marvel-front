import { Link } from "react-router-dom";

const Card = ({ data }) => {
  console.log(data);
  const { _id, thumbnail, name, description } = data;
  return (
    <Link to={`/character/${_id}`}>
      <article key={_id}>
        <h2>{name}</h2>
        <img src={thumbnail.path + "." + thumbnail.extension} alt={name} />
        <p>{description}</p>
      </article>
    </Link>
  );
};

export default Card;
