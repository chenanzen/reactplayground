import logo from "../assets/GloboLogo.png";
import {logo as locoClass} from "./Banner.module.css";


// using style attribute here is discouraged, but for the sake of this example, we will use it
// due to separation of concerns.
const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

const Banner = ({children}) => {
  return (
    <header className="row mb-4">
      <div className="col-5 col-sm-5">
        <img className={locoClass} src={logo} alt="logo" />
      </div>
      <div className="col-7 col-sm-7 mt-5" style={subtitleStyle}>
        {children}
      </div>
    </header>
  );
};


export default Banner;
