import { Link } from "react-router-dom";
import vinted from "../assets/vintedLogo.jpg";

const Header = ({ token, handleToken }) => {
  // const token = Cookies.get("vinted-token");

  return (
    <header>
      <div className="container">
        <section className="header">
          <Link to="/">
            <img src={vinted} alt="l" />{" "}
          </Link>
          {token ? (
            <button
              onClick={() => {
                // Cookies.remove("vinted-token");
                // setToken(null);
                handleToken(null);
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <article className="loli">
              <Link to="/signup">S'inscrire</Link>
              <Link to="/login">Se connecter</Link>
            </article>
          )}

          <Link to={token ? "/publish" : "/login"}>Vends tes articles !</Link>
        </section>
      </div>
    </header>
  );
};

export default Header;
