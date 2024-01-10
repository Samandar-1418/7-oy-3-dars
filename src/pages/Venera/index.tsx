import Header from "../Header";
import Veneraimg from "../../assets/planet-venus.svg";
import "./index.css";


function Venera({ data }: { data: CardData[] }) {
  const veneraData = data.find((planet) => planet.name === "Venus");
  return (
    <div className="container">
      <Header />
      <main>
        <div className="hero-container">
          <div className="picture-container">
            <img className="picture-img" src={Veneraimg} alt="" />
          </div>
          <div className="info-container">
            <span className="title">{veneraData?.name}</span>
            <p className="info">
            {veneraData?.overview.content}
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
       <div className="wrapper"><p>ROTATION TIME</p><span>{veneraData?.rotation}</span></div>
        <div className="wrapper"><p>REVOLITION TIME</p><span>{veneraData?.revolution}</span></div>
        <div className="wrapper"><p>RADIUS</p><span>{veneraData?.radius}</span></div>
        <div className="wrapper"><p>AVERAGE TEMP</p><span>{veneraData?.temperature}</span></div>
       </div>
      </main>
    </div>
  );
}


export default Venera;
