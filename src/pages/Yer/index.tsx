import Header from "../Header";
import Yerimg from "../../assets/planet-earth.svg";
import "./index.css";


function Yer({ data }: { data: CardData[] }) {
  const yerData = data.find((planet) => planet.name === "Earth");
  return (
    <div className="container">
      <Header />
      <main>
        <div className="hero-container">
          <div className="picture-container">
            <img className="picture-img" src={Yerimg} alt="rasm" />
          </div>
          <div className="info-container">
            <span className="title">{yerData?.name}</span>
            <p className="info">
            {yerData?.overview.content}
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
       <div className="wrapper"><p>ROTATION TIME</p><span>{yerData?.rotation}</span></div>
        <div className="wrapper"><p>REVOLITION TIME</p><span>{yerData?.revolution}</span></div>
        <div className="wrapper"><p>RADIUS</p><span>{yerData?.radius}</span></div>
        <div className="wrapper"><p>AVERAGE TEMP</p><span>{yerData?.temperature}</span></div>
        </div>

      </main>
      </div>
  
    
)};


export default Yer;
