import { useState } from "react";
import flora from "../components/img/floraCiudad.jpg";
import "./Home.css";

const Home = ({ user, setUser }) => {
  console.log("User: ", user);
  const handleLogout = () => {
    setUser([]);
  };
  const [error, setError] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSave = (e) => {
    //para evitar refrescar por defecto//
    e.preventDefault();
    console.log("event: ", e);
    if (comment === "") {
      //aquí validamos que los campos sean usados//
      setError(true);
      return;
    }

    setError(false); //volver al estado inicial

    setComments((prev) => [...prev, comment]); //para agregar el ultimo com a lista
  };

  return (
    <div className="general">
      <h5>Articulos de estudio</h5>

      <div className="articuloMedioAmbiente">
        <h2>cuidado de la flora</h2>
        <img src={flora} width={"40%"} />
        <p>
          Proteger la naturaleza urbana está a nuestro alcance y es de suma
          importancia la preservación de la flora en la ciudad para crear
          bienestar en nuestro hogar. Pues, ¿sabías que más de la mitad de la
          población mundial vive en ciudades? A todos nos gusta asomarnos a
          nuestra ventana y ver árboles, parques, nuestras plazas repletas de
          plantas e incluso escuchar cantar a los pájaros por la mañana.
          Deberíamos interesarnos por vivir en urbes más amables con la
          naturaleza, pero de ello dependerá nuestros hábitos. La falta de
          concienciación ha propiciado diseñar ciudades “asépticas” en las que
          reina el asfalto, los coches, el tráfico, árboles talados y lo que es
          peor, hasta se derriban nidos porque “afean las fachadas”.
        </p>
      </div>

      <div>
        <form id="commentForm">
          <textarea
            name="comment"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </form>
      </div>
      <>
        {comments.map((value, index) => {
          return <h3>{value}</h3>;
        })}
      </>
      <button className="guardar" onClick={handleSave}>
        Guardar comentario
      </button>
    </div>
  );
};

export default Home;
