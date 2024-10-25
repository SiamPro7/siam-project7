import "./PromoBanner.css";

const PromoBanner = () => {
  return (
    <div className="banner">
      <div className="content">
        <img src="./assets/banner-main.png" alt="Cricket" className="logo" />
      </div>
      <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p>Beyond Boundaries Beyond Limits</p>
      <a href="#" className="btn">
        Claim Free Credit
      </a>
    </div>
  );
};

export default PromoBanner;
