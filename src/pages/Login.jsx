import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //rappel

const Login = ({ handleToken }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // rappel
  const handlechangeemail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlechangepassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.token) {
        handleToken(response.data.token);
        // Cookies.set("vinted-token", response.data.token, { expires: 15 });
        // setToken(response.data.token);
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
            type="email"
            placeholder="email"
            value={email}
            onChange={handlechangeemail}
          />
          <input
            type="password"
            placeholder="mots de passe"
            value={password}
            onChange={handlechangepassword}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </main>
  );
};

export default Login;
