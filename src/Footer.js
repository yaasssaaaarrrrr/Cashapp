import apple from "./img/Vector.svg";
import google from "./img/Vector (1).svg";
import downArrow from "./img/Vector (2).svg";
import bot from "./img/Frame.svg";
import twitter from "./img/Frame (1).svg";
import instagram from "./img/Frame (2).svg";

function Footer() {
  return (
    <div className="footer">
      <div className="downloadButton">
        <div className="button">
          <div className="appStore">
            <img src={apple} className="appleImg" />
            <p className="label">APP STORE</p>
          </div>
          <div className="googleStore">
            <img src={google} className="googleImg" />
            <p className="label-1">GOOGLE PLAY</p>
          </div>
        </div>
      </div>
      <div className="downArrow">
        <img src={downArrow} className="downArrowImg" />
      </div>
      <div className="paratext">
        <p className="brokerage-services">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
      </div>
      <div className="socialIcon">
        <img src={bot} className="botImg" />
        <img src={twitter} className="twitterImg" />
        <img src={instagram} className="instagramImg" />
      </div>
    </div>
  );
}

export default Footer;
