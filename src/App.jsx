import Cards from "./Component/Cards";
import Navbar from "./Component/Navbar";
import "./App.css";

import PromoBanner from "./Component/PromoBanner";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <PromoBanner></PromoBanner>
      <div className="button">
        <button className="black">Available</button>
        <button className="black">Selected</button>
      </div>

      <Cards></Cards>
    </>
  );
}

export default App;
