
import "./PromoBanner.css";

const PromoBanner = ({ onButtonClick }) => {
  return (
    <div className="banner">
      <div className="content">
        <img src="./assets/banner-main.png" alt="Cricket" className="logo" />
      </div>
      <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p>Beyond Boundaries Beyond Limits</p>
      <button onClick={ onButtonClick } className="btn">
        Claim Free Credit
      </button>
    </div>
  );
};

export default PromoBanner;
