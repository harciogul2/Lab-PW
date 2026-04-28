import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);       // ex. 2: error handling
  const [search, setSearch] = useState('');        // ex. 3: filtrare

  useEffect(function() {
    fetch('/data/projects.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch(function(err) {
        setError('Eroare la incarcarea datelor');  // ex. 2
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Se incarca...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  // ex. 3: filtrare case-insensitive dupa titlu
  const filtered = projects.filter(function(p) {
    return p.title.toLowerCase().includes(search.toLowerCase());
  });

  // ex. 4: statistici
  const total = projects.length;
  const finalizate = projects.filter(p => p.done).length;
  const inLucru = projects.filter(p => !p.done).length;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
      <h3>Proiecte (din JSON)</h3>

      {/* ex. 3: input de cautare */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="cauta dupa titlu..."
        style={{ padding: '8px', marginBottom: '15px', width: '100%', boxSizing: 'border-box' }}
      />

      {/* afisare proiecte filtrate cu Card */}
      {filtered.map(function(item) {
        return (
          <Card
            key={item.id}
            title={item.title}
            description={`Tehnologii: ${item.tech} | Status: ${item.done ? '✅ finalizat' : '🔧 in lucru'}`}
          />
        );
      })}

      {filtered.length === 0 && <p>Niciun proiect gasit.</p>}

      {/* ex. 4: statistici */}
      <div style={{ marginTop: '15px', padding: '10px', background: '#f4f4f4', borderRadius: '8px' }}>
        <strong>Statistici:</strong>
        <span style={{ marginLeft: '15px' }}>Total: {total}</span>
        <span style={{ marginLeft: '15px', color: 'green' }}>Finalizate: {finalizate}</span>
        <span style={{ marginLeft: '15px', color: 'orange' }}>In lucru: {inLucru}</span>
      </div>
    </div>
  );
}

export default ProjectList;
