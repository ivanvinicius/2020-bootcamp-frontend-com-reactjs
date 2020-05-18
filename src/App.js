import React, { useState, useEffect } from 'react';

import api from './services/api';
import './App.css';

import Header from './components/Header';

export default function App() { 
  /** Criando estado de projetos */ 
  const [projects, setProjects] = useState([]);

  /**
   * 1. Monitora as alterações do estado de PROJECTS
   * 2. O segundo parâmetro do método é o array de denpendências de monitoramento
   * 3. É impossível usar ASYNC AWAIT dentro do useEffet da maneira tradicional, causa erro,
   *    dessa forma utilizamos o .THEN() para lidar com a PROMISSE
   */
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  /**
   * 1. Padrão de nomeclatura handle(FunctionName), utilizamos handle 
   *    quando precisamos lidar com algum evento do usuário
   * 2. Para conseguir lidar com funções ASYNC AWAIT é necessario instalar 
   *    @babel/plugin-transform-runtime e configurar PLUGINS no arquivo babel.config.js
   */
  async function handleAddProject() {
    const newProject = { title: `Novo Projeto ${Date.now()}`, owner: "Ivan" };

    const response = await api.post('projects', newProject);

    const createdProject = response.data;

    setProjects([...projects, createdProject]);
  }

  return (
    <>
      {/* Propriedade TITLE sendo passada para o compenente HEADER */}
      <Header title="Projects"/>

      <ul>
        {
        /* 
        * 1. Fazendo a listangem dos projetos com o método MAP
        * 2. Quando existe uma lisgatem é sempre necessário indicar uma KEY para o primeiro elemento HTML em questão
        *    isso é necessário para que o React consiga reenderizar os elementos de forma mais organizada
        */
        }
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button onClick={handleAddProject}type="button">Add project</button>
    </>
  );
}
