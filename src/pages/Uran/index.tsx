import Header from "../Header";
import Uranimg from "../../assets/planet-uranus.svg";
import "./index.css";


function Uran({ data }: { data: CardData[] }) {
  const uranData = data.find((planet) => planet.name === "Uranus");
  return (
    <div className="container">
      <Header />
      <main>
        <div className="hero-container">
          <div className="picture-container">
            <img className="picture-img" src={Uranimg} alt="" />
          </div>
          <div className="info-container">
            <span className="title">{uranData?.name}</span>
            <p className="info">
            {uranData?.overview.content}
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
       <div className="wrapper"><p>ROTATION TIME</p><span>{uranData?.rotation}</span></div>
        <div className="wrapper"><p>REVOLITION TIME</p><span>{uranData?.revolution}</span></div>
        <div className="wrapper"><p>RADIUS</p><span>{uranData?.radius}</span></div>
        <div className="wrapper"><p>AVERAGE TEMP</p><span>{uranData?.temperature}</span></div>
       </div>
      </main>
    </div>
  );
}


export default Uran;
