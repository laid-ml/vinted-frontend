import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("0");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", place);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate(`/offers/${response.data._id}`);

      //   console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return token ? (
    <main>
      <h1>Page Publish</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "500px" }}
      >
        <label htmlFor="picture-input" style={{ color: "green" }}>
          + Ajoute une photo !
        </label>
        {picture && <img src={URL.createObjectURL(picture)} alt="Image" />}
        <input
          style={{ display: "none" }}
          id="picture-input"
          type="file"
          onChange={(event) => {
            // console.log(event);
            setPicture(event.target.files[0]);
          }}
        />
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          name=""
          id=""
        ></textarea>
        <input
          type="text"
          placeholder="Marque"
          value={brand}
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Taille"
          value={size}
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Couleur"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="État"
          value={condition}
          onChange={(event) => {
            setCondition(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ville"
          value={place}
          onChange={(event) => {
            setPlace(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="200"
          value={price}
          onChange={(event) => {
            // console.log(typeof event.target.value);
            setPrice(event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
