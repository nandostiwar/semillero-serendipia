import { Home, Myform } from './components/Home';
import './App.css';
import { Formulario } from './components/Formulario';
import { useState } from 'react';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario ha iniciado sesión
  const [nombreUsuario, setNombreUsuario] = useState(''); // Estado para almacenar el nombre del usuario

  // Función para establecer el estado de inicio de sesión cuando el usuario se autentica
  const handleLogin = (nombre) => {
    // Realiza la autenticación aquí, por ejemplo, mediante una solicitud al servidor
    // Si la autenticación es exitosa, establece isLoggedIn en true y el nombre del usuario
    setIsLoggedIn(true);
    setNombreUsuario(nombre);
  };

  // Función para cerrar sesión del usuario
  const handleLogout = () => {
    setIsLoggedIn(false);
    setNombreUsuario('');
  };

  return (
    <div className="App">
      {/* Renderiza el componente Formulario si el usuario no ha iniciado sesión */}
      {!isLoggedIn ? (
        <Formulario setUser={handleLogin} />
      ) : (
        <>
          {/* Renderiza el componente Home */}
          <Home nombreUsuario={nombreUsuario} />

          {/* Renderiza el componente Myform */}
          <Myform />
          
          {/* Agrega un botón para cerrar sesión */}
          <button className='out' onClick={handleLogout}>Cerrar sesión</button>
        </>
      )}
    </div>
  );
}

export default App;
