import "./App.css";
import CardList from "./components/CardList";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <CardList />
    </>
  );
}

export default App;
