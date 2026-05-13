import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  // lab10 ex4: state-uri pentru formular
    const [title, setTitle] = useState('');
    const [tech, setTech] = useState('');
  
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

  // lab10 ex4: trimite proiect nou la API
async function handleSubmit() {
 try {
    const response = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, tech: tech }),
    });
    const newProject = await response.json();
        setProjects([...projects, newProject]);
        setTitle(''); // Goleste input-urile
         setTech('');
    } catch (err) {
    console.error('Eroare:', err);
    }
  }
/// lab10 ex5: sterge proiect din API si din state
  async function handleDelete(id) {
    try {
      await fetch('http://localhost:3000/api/projects/' + id, {
        method: 'DELETE',
      });
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      console.error('Eroare stergere:', err);
    }
  }
//lab 11 ex 1 functie async toggle done/undone
async function handleToggle(id, currentDone) {
    try {
      const response = await fetch('http://localhost:3000/api/projects/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: !currentDone }),
      });
      const updatedProject = await response.json();
      setProjects(projects.map(p => p._id === id ? updatedProject : p));
    } catch (err) {
      console.error('Eroare toggle:', err);
    }
  }


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
{/* lab10 ex4: formular adaugare proiect */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="titlu proiect..."
          style={{ flex: 1 }}
        />
        <input
          type="text"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          placeholder="tehnologii..."
          style={{ flex: 1 }}
        />
        <button className="btn-primary" onClick={handleSubmit}>adauga</button>
      </div>

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
              <div key={item._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Card
                  title={item.title}
                  description={`${item.tech}  ·  ${item.done ? '✅ finalizat' : '🔧 in lucru'}`}
                />
                <div style={{ display: 'flex', gap: '6px', marginLeft: '10px', flexShrink: 0 }}>
                  {/* lab11 ex1: toggle */}
                  <button
                    onClick={() => handleToggle(item._id, item.done)}
                    style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                  >
                    {item.done ? 'anuleaza' : 'finalizeaza'}
                  </button>
                  {/* lab10 ex5: sterge */}
                  <button
                    className="btn-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    sterge
                  </button>
                </div>
              </div>
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
