import React, { useEffect, useState } from "react";
import "./style.css";

function ListarUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Troque pela sua API real
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="listar-usuario-container">
      <h2>Lista de Usuários</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul className="lista-usuarios">
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              <strong>{usuario.name}</strong> - {usuario.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListarUsuario;