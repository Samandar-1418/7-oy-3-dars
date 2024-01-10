import Header from "../Header";
import Marsimg from "../../assets/planet-mars.svg";
import "./index.css";


function Mars({ data }: { data: CardData[] }) {
  const marsData = data.find((planet) => planet.name === "Mars");
  return (
    <div className="container">
      <Header />
      <main>
        <div className="hero-container">
          <div className="picture-container">
            <img className="picture-img" src={Marsimg} alt="" />
          </div>
          <div className="info-container">
            <span className="title">{marsData?.name}</span>
            <p className="info">
            {marsData?.overview.content}
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
       <div className="wrapper"><p>ROTATION TIME</p><span>{marsData?.rotation}</span></div>
        <div className="wrapper"><p>REVOLITION TIME</p><span>{marsData?.revolution}</span></div>
        <div className="wrapper"><p>RADIUS</p><span>{marsData?.radius}</span></div>
        <div className="wrapper"><p>AVERAGE TEMP</p><span>{marsData?.temperature}</span></div>
       </div>
      </main>
    </div>
  );
}


export default Mars
