// src\componentes\CadastrarUsuario\index.jsx
import React, { useState } from "react";
import "./style.css";

const CadastrarUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem("Usuário cadastrado com sucesso!");
    setNome("");
    setEmail("");
    setSenha("");
  };


  return (
    <div className="cadastrar-usuario-container">
    
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastrarUsuario;