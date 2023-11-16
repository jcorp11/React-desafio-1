import "./css/MyCard.css";
import Tag from "./Tag";

const MyCard = ({ image, name, desc, bg, text }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="desc">{desc}</p>
      <Tag bg={bg} text={text} />
    </div>
  );
};

export default MyCard;
