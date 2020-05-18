import React, { useState, useEffect } from 'react';

import api from './services/api';
import './App.css';

import Header from './components/Header';

export default function App() {  
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const newProject = { title: `Novo Projeto ${Date.now()}`, owner: "Ivan" };

    const response = await api.post('projects', newProject);

    const createdProject = response.data;

    setProjects([...projects, createdProject]);
  }

  return (
    <>
      <Header title="Projects"/>

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button onClick={handleAddProject}type="button">Add project</button>
    </>
  );
}
