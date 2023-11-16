import "./css/MyCard.css";

const MyCard = ({ image, name, desc }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default MyCard;
