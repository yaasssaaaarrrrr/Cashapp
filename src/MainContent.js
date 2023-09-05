import cube1 from "./img/intro-cube 1.png";
import cube2 from "./img/intro-cubes 1.png";
import stair from "./img/intro-stairs 1.png";
import phone from "./img/intro-phone 1.png";
import piller from "./img/intro-pillar 1.png";

function MainContent() {
  return (
    <>
      <CubeBox />
      <Stairs />
      <CashMobile />
      <CubeBox2 />
      <Piller />
    </>
  );
}

function CubeBox() {
  return (
    <div className="cube1">
      <img src={cube1} className="cube1Img" />
    </div>
  );
}

function Stairs() {
  return (
    <div className="Stairs">
      <img src={stair} className="StairsImg" />
    </div>
  );
}

function CashMobile() {
  return (
    <div className="contentcashapp">
      <h1 className="cashtxt">CASH</h1>
      <h1 className="apptxt">APP</h1>
      <div className="phone">
        <img src={phone} className="phoneImg" />
      </div>
    </div>
  );
}

function CubeBox2() {
  return (
    <div className="cube2">
      <img src={cube2} className="cube2Img" />
    </div>
  );
}

function Piller() {
  return (
    <div className="piller">
      <img src={piller} className="pillerImg" />
    </div>
  );
}

export default MainContent;
