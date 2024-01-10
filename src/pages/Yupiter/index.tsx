import Header from "../Header";
import Yupiterimg from "../../assets/planet-jupiter.svg";
import "./index.css";


function Yupiter({ data }: { data: CardData[] }) {
  const yupiterData = data.find((planet) => planet.name === "Jupiter");
  return (
    <div className="container">
      <Header />
      <main>
        <div className="hero-container">
          <div className="picture-container">
            <img className="picture-img" src={Yupiterimg} alt="rasm" />
          </div>
          <div className="info-container">
            <span className="title">{yupiterData?.name}</span>
            <p className="info">
            {yupiterData?.overview.content}
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
       <div className="wrapper"><p>ROTATION TIME</p><span>{yupiterData?.rotation}</span></div>
        <div className="wrapper"><p>REVOLITION TIME</p><span>{yupiterData?.revolution}</span></div>
        <div className="wrapper"><p>RADIUS</p><span>{yupiterData?.radius}</span></div>
        <div className="wrapper"><p>AVERAGE TEMP</p><span>{yupiterData?.temperature}</span></div>
       </div>
      </main>
    </div>
  );
}


export default Yupiter;
