import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./normalize.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import cardArray from "./assets/data";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Adopta un Perrito" />

      <section className="gridContainer">
        <section className="cardContainer">
          {cardArray.map((card) => {
            return (
              <MyCard
                key={card.id}
                // image={card.image}
                // name={card.name}
                // desc={card.desc}
                // bg={card.bg}
                // text={card.text}
                {...card}
              />
            );
          })}
        </section>
      </section>

      <Footer />
    </>
  );
}

export default App;
