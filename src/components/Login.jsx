import { useState } from "react";
import Formulario from "./Formulario";
import Home from "./Home";

const Login = () => {
  //validar si hay usuario para enviar a pag inicial
  const [user, setUser] = useState([]);

  return (
    //usamos el Formulario
    <div className="App">
      {!user.length > 0 ? ( //si user no tiene nada muestre form sino envie a home
        <Formulario setUser={setUser} />
      ) : (
        <Home user={user} setUser={setUser} />
      )}
    </div>
  );
};

export default Login;
