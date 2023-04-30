import data from "./data";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <>
      <div className="frame">
        <Navbar />
        {cards}
      </div>
    </>
  );
}

export default App;
