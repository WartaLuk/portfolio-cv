import "./Logo.scss";
import LogoW from "../../../assets/images/logo-w.png";
const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoW} alt="Logo with name" />
    </div>
  );
};

export default Logo;
