import { Navigate } from "react-router-dom";
import "./Formulario.css";
import { useState } from "react"; //llamamos funcion para estados//

const Formulario = ({ setUser }) => {
  const [usuario, setUsuario] = useState(""); //para capturar nombre//
  const [contraseña, setContraseña] = useState(""); //para capturar contraseña//
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    //para evitar refrescar por defecto//
    e.preventDefault();
    console.log("event: ", e);
    if (usuario === "" || contraseña === "") {
      //aquí validamos que los campos sean usados//
      setError(true);
      return;
    }

    setError(false); //volver al estado inicial

    setUser([usuario, contraseña]); //pasamos los valores al estado del Home
  };

  return (
    //montaje de formulario//
    <section>
      {/*usuario && <Navigate to="/home" replace={true} />*/}
      <h1>Ingreso para estudiantes</h1>
      <br />
      <form className="formulario">
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)} //se captura el input(nombre) como un evento//
        />
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)} //se captura el input(contraseña) como un evento//
        />
        <button onClick={handleSubmit}>inicio de sesion</button>
      </form>
      {error && <p>los campos son obligatorios</p>}
    </section>
  );
};

export default Formulario;
