import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false); // Estado de carga
  const [view, setView] = useState(''); // Controla la vista de Login o Registro
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Función para manejar la carga y redirigir
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (view === 'login') {
        alert('Buen trabajo, exitoso inicio de sección!!!!!');
      } else {
        alert('Registration estupendo!');
      }
    }, 2000); // Simulamos un retraso de 2 segundos
  };

  // Funciones para mostrar Login o Registro
  const showLogin = () => setView('login');
  const showSignup = () => setView('signup');

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Botones para navegar a Login y Registro */}
      <div>
        <button onClick={showLogin}>Login</button>
        <button onClick={showSignup}>Registro</button>
      </div>

      {/* Mostrar el estado de carga */}
      {loading && <p>Loading...</p>}

      {/* Mostrar el formulario de Login o Registro según el estado 'view' */}
      {view === 'login' && !loading && (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      )}

      {view === 'signup' && !loading && (
        <div>
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Confirmar Contraseña</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Registrarse</button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
