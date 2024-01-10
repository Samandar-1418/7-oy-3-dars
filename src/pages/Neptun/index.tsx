import Header from "../Header";
import Neptunimg from "../../assets/planet-neptune.svg";
import "./index.css";


function Neptun({ data }: { data: CardData[] }) {
  const neptunData = data.find((planet) => planet.name === "Neptune");
  return (
    <div className="container">
      <Header />
      <main>
        <div className="hero-container">
          <div className="picture-container">
            <img className="picture-img" src={Neptunimg} alt="" />
          </div>
          <div className="info-container">
            <span className="title">{neptunData?.name}</span>
            <p className="info">
            {neptunData?.overview.content}
            </p>
            <span className="location">Source : Wikipedia</span>
            <button className="oneBtn btn">
              <span className="number">01</span> <span>OVERVIEW</span>
            </button>
            <button className="twoBtn btn">
              <span className="number">02</span> <span>Internal Structure</span>
            </button>
            <button className="threeBtn btn">
              <span className="number">03</span> <span>Surface Geology</span>
            </button>
          </div>
        </div>
       <div className="information">
       <div className="wrapper"><p>ROTATION TIME</p><span>{neptunData?.rotation}</span></div>
        <div className="wrapper"><p>REVOLITION TIME</p><span>{neptunData?.revolution}</span></div>
        <div className="wrapper"><p>RADIUS</p><span>{neptunData?.radius}</span></div>
        <div className="wrapper"><p>AVERAGE TEMP</p><span>{neptunData?.temperature}</span></div>
       </div>
      </main>
    </div>
  );
}


export default Neptun
