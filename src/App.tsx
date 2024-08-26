import logo from "./assets/logo.png";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div className="h-lvh font-['comic_sans_ms'] bg-[#ffb622]">
      <header>
        <nav className="flex items-center bg-[#dd3f29]">
          <img src={logo} className="w-32" alt="" />
          <ul className="w-full flex justify-evenly">
            <li>recettes du chef</li>
            <li>aléatoire</li>
            <li>troisieme option</li>
          </ul>
        </nav>
      </header>
      <section className="flex justify-center">
        <div className="px-[15rem] py-[5rem] grid grid-cols-3 mx-auto gap-12 gap-y-24">
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
      </section>
    </div>
  );
}

export default App;
