import React, { useState } from 'react';

import Header from './components/Header';

export default function App() {  
  const [projects, setProjects] = useState(['projeto 1', 'projeto 2']);


  function handleAddProject() {
    setProjects([...projects, `projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects"/>
      
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button onClick={handleAddProject}type="button">Add project</button>

    </>
  );
}
