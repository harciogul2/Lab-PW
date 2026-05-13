import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(function() {
  // INAINTE (JSON static):
    //fetch('/data/projects.json')
    //DUPA (API Express): lab 10 ex 2

fetch('http://localhost:3000/api/projects')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        //setProjects(data.projects);
        setProjects(data)

        setLoading(false);
      })
      .catch(function(err) {
        setError('Eroare la incarcarea datelor');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="section-card"><p className="state-msg">Se incarca...</p></div>;
  if (error)   return <div className="section-card"><p className="state-msg error">{error}</p></div>;

  const filtered = projects.filter(function(p) {
    return p.title.toLowerCase().includes(search.toLowerCase());
  });

  const total      = projects.length;
  const finalizate = projects.filter(p => p.done).length;
  const inLucru    = projects.filter(p => !p.done).length;

  return (
    <div className="section-card">
      <h3>proiecte din json</h3>

      <div className="search-input">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="cauta dupa titlu..."
        />
      </div>

      {filtered.length === 0
        ? <p className="state-msg">Niciun proiect gasit.</p>
        : filtered.map(function(item) {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={`${item.tech}  ·  ${item.done ? '✅ finalizat' : '🔧 in lucru'}`}
              />
            );
          })
      }

      <div className="stats-bar">
        <span className="stat-pill total">📁 Total: {total}</span>
        <span className="stat-pill done">✅ Finalizate: {finalizate}</span>
        <span className="stat-pill wip">🔧 In lucru: {inLucru}</span>
      </div>
    </div>
  );
}

export default ProjectList;
