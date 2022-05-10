import { Link, useNavigate } from "react-router-dom";
import bergenWhite from "../../images/Bergen-white.png";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

export default function Footer() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useNavigate();

  function logout() {
    setAuth(null);
    history("/login");
  }

  return (
    <footer className="footer container">
      <div className="footer__flex--1">
        {auth ? (
          <>
            <p className="light"> Logged in as admin. </p>
            <Link to="/admin">
              <p className="light bold">Go to admin page</p>
            </Link>
            <div className="logout-button">
              <button className="logout-button" onClick={logout}>
                Log out{" "}
              </button>
            </div>
          </>
        ) : (
          <Link to="/login">
            <p className="light underline">Login for admin tools</p>
          </Link>
        )}
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
