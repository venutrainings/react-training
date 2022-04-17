import logo from "./logo192.png";

const Header = ({ subtitle, title }) => (
  <header className="row">
    <div className="col-md-5">
      <img src={logo} className="logo" alt="logo"></img>
    </div>
    <div className="col-md-7 mt-5 subtitle">
      {title} - {subtitle}
    </div>
  </header>
);

export default Header;
