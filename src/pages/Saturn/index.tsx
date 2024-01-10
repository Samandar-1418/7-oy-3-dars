import Header from "../Header";
import Saturnimg from "../../assets/planet-saturn.svg";
import "./index.css";


function Saturn({ data }: { data: CardData[] }) {
  const saturnData = data.find((planet) => planet.name === "Saturn");
  return (
    <div className="container">
      <Header />
      <main>
        <div className="hero-container">
          <div className="picture-container">
            <img className="picture-img" src={Saturnimg} alt="" />
          </div>
          <div className="info-container">
            <span className="title">{saturnData?.name}</span>
            <p className="info">
            {saturnData?.overview.content}
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
       <div className="wrapper"><p>ROTATION TIME</p><span>{saturnData?.rotation}</span></div>
        <div className="wrapper"><p>REVOLITION TIME</p><span>{saturnData?.revolution}</span></div>
        <div className="wrapper"><p>RADIUS</p><span>{saturnData?.radius}</span></div>
        <div className="wrapper"><p>AVERAGE TEMP</p><span>{saturnData?.temperature}</span></div>
       </div>
      </main>
    </div>
  );
}


export default Saturn;
