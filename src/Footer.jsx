
import "./Footer.css"; // Link to the CSS file

const Footer = () => {
  return (
    <div className="what">
      <div className="newsletter">
        <div className="padding">
          <h2>Subscribe to our Newsletter</h2>
          <p>Get the latest updates and news right in your inbox!</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-img">
          <img src="./assets/logo-footer.png" alt="" />
        </div>

        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-section subscribe">
            <h3>Subscribe</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="subscribe-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy;2024 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
