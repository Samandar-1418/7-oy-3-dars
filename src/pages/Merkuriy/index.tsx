import Header from "../Header";
import Merikury from "../../assets/planet-mercury.svg";
import "./index.css";


function Merkuriy({ data }: { data: CardData[] }) {
  const merkuriyData = data.find((planet) => planet.name === "Mercury");
  return (
    <div className="container">
      <Header />
      <main>
        <div className="hero-container">
          <div className="picture-container">
            <img className="picture-img" src={Merikury} alt="" />
          </div>
          <div className="info-container">
            <span className="title">{merkuriyData?.name}</span>
            <p className="info">
            {merkuriyData?.overview.content}
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
       <div className="wrapper"><p>ROTATION TIME</p><span>{merkuriyData?.rotation}</span></div>
        <div className="wrapper"><p>REVOLITION TIME</p><span>{merkuriyData?.revolution}</span></div>
        <div className="wrapper"><p>RADIUS</p><span>{merkuriyData?.radius}</span></div>
        <div className="wrapper"><p>AVERAGE TEMP</p><span>{merkuriyData?.temperature}</span></div>
       </div>
      </main>
    </div>
  );
}

//   return (
//     <div>
//       <h2></h2>
//       <p></p>
//       {/* Boshqa ma'lumotlarni ham shu xil olishingiz mumkin */}
//     </div>
//   );
// }
export default Merkuriy
