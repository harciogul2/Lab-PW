import { useState,useEffect } from 'react';
import QuickNote from '../QuickNote';
import TodoList from '../TodoList';

function Home() {
  const [count, setCount] = useState(0);

    // lab11 ex4: statistici de la API
    const [stats, setStats] = useState(null);
  
    useEffect(function() {
      fetch('http://localhost:3000/api/stats')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setStats(data);
        })
        .catch(function(err) {
          console.error('Eroare statistici:', err);
        });
    }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>Bine ai venit pe dashboard-ul meu!</p>

      <p>cateva lucruri despre mine:</p>
      <ul>
        <li>studenta la calculatoare</li>
        <li>pasionata de tehnologie</li>
        <li>imi place motorsportul si sahul</li>
      </ul>

 {/* lab11 ex4: statistici live din API */}
      {stats && (
        <div className="section-card">
          <h3>statistici proiecte</h3>
          <div className="stats-bar">
            <span className="stat-pill total">📁 Total: {stats.total}</span>
            <span className="stat-pill done">✅ Finalizate: {stats.done}</span>
            <span className="stat-pill wip">🔧 In lucru: {stats.inProgress}</span>
          </div>
        </div>
      )}
      <div className="section-card">
        <h3>contor</h3>
        <div className="counter-display">{count}</div>
        <p className="counter-label">apasari</p>
        <div className="btn-group">
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>−1</button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
      </div>

      <QuickNote />
      <TodoList />
    </div>
  );
}

export default Home;
