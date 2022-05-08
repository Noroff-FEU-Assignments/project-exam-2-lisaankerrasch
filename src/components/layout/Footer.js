import { Link } from "react-router-dom";
import bergenWhite from "../../images/Bergen-white.png";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="foooter__flex--1">
        <Link to="/login">
          <p id="admin" className="nav__link">
            Log in for admin tools
          </p>
        </Link>
      </div>

      <div className="foooter__flex--2">
        <img
          src={bergenWhite}
          className="footer__illustration"
          alt="Illustration of Bryggen"
        />
      </div>
    </footer>
  );
}
