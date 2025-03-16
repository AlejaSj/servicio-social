import { useState, useEffect } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/mensajes")
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Prueba de Conexión</h1>
      <p>{mensaje || "Cargando..."}</p>
    </div>
  );
}

export default App;