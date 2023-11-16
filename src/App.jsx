import "./App.css";
import "./normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import cardArray from "./assets/data";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header title="Adopta un Perrito" />
      <section className="cardContainer">
        {cardArray.map((card) => {
          return (
            <MyCard
              key={card.id}
              image={card.image}
              name={card.name}
              desc={card.desc}
              bg={card.bg}
              text={card.text}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
