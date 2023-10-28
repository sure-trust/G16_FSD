import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <ul>
          {projects.map(project => (
            <li key={project._id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
