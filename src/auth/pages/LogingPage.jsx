
// this is a component that will be rendered when the user is not authenticated

import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts";

export const LogingPage = () => {
  const [username, setUsername] = useState("");// Estado local para almacenar el nombre de usuario ingresado por el usuario

const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  

  

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    login(username);// Pasamos el nombre de usuario a la función de inicio de sesión del contexto de autenticación

    // login('');

    navigate(lastPath,{

       replace: true
       
      });
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // Actualizamos el estado local con el nombre de usuario ingresado por el usuario
  };

  const isDisabled = username.trim() === ""; // Comprobamos si el estado local está vacío o no


//   return (
//     <div className="container mt-5">
//       <h1>Login</h1>
//       <hr />
//       <button 
//         className="btn btn-primary"
//         onClick={onLogin}
//         >
//         Login
//       </button>
//     </div>
//   )
// }

return (
  <div className="container mt-5">
    <h1>Login</h1>
    <hr />
    <div className="mb-3">
      <label htmlFor="username" className="form-label">
        <h3>User name</h3>
      </label>
      <input
        type="text"
        placeholder="Write your name"
        autoComplete="off"
        className="form-control text-center rounded-pill btn-outline-info"
        id="username"
        value={username}
        onChange={handleUsernameChange} // Manejador de cambios para actualizar el estado local con el nombre de usuario ingresado por el usuario
      />
    </div>
    <button className="btn btn-primary"
     onClick={onLogin}
     disabled={isDisabled} // Deshabilitamos el botón de inicio de sesión si el estado local está vacío

     >
      Login
    </button>
  </div>
);
};
