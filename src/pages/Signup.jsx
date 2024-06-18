import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; //rappel

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const handlechangeusername = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handlechangepassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handlechangeemail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          password: password,
          username: username,
          newsletter: true,
        }
      );

      if (response.data.token) {
        // J'enregistre le token dans mon state et mes cookies
        handleToken(response.data.token);
        // Cookies.set("vinted-token", response.data.token, { expires: 15 });
        // setToken(response.data.token);
        // Rediriger l'utilisateur vers la page /
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }

    event.preventDefault();
  };

  return (
    <main>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={handlechangeusername}
          />
          <input
            type="password"
            placeholder="mots de passe"
            value={password}
            onChange={handlechangepassword}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={handlechangeemail}
          />
          <input
            type="checkbox"
            onChange={(event) => {
              const value = event.target.value;
              setNewsletter(value);
            }}
          />
          <span>newsletter </span>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </main>
  );
};

export default Signup;
