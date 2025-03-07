import React, { useEffect, useState } from 'react';
import './Login.css';
import { postUser } from '../../controllers/Rotas';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await postUser(formData)
        console.log(response.status)
      };


  return (
    <div className="form-container">
      <h2 className="form-title">Cadastro</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="aome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit"  className="form-button">Cadastrar</button>
      </form>
    </div>
  );
}

export default Form;
