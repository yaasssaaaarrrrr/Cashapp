import dollar from "./img/logo.svg";
import eye from "./img/Layer 2.svg";

function Header() {
  return (
    <div className="header">
      <div className="cashapp-logo">
        <img src={dollar} alt="logo" />
      </div>
      <div className="main-menu">
        <ul className="menu clip-contents">
          <li className="sign-in">Sign In</li>
          <li className="legal">Legal</li>
          <li className="licenses">Licenses</li>
          <li className="security">Security</li>
          <li className="careers">Careers</li>
          <li className="press">Press</li>
          <li className="support">Support</li>
          <li className="status">Status</li>
          <li className="codeblog">Codeblog</li>
        </ul>
      </div>
      <div className="eye-button">
        <img src={eye} alt="eye" />
      </div>
    </div>
  );
}

export default Header;
