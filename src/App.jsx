import "./App.css";
import "./normalize.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import cardArray from "./assets/data";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header title="Adopta un Perrito" />
      <section className="cardContainer">
        <MyCard
          image="https://placedog.net/300/300"
          name="Max"
          desc="El mejor perrito de todos los tiempos"
        />
        {cardArray.map((card) => {
          return (
            <MyCard
              key={card.id}
              image={card.image}
              name={card.name}
              desc={card.desc}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
