import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(function() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setUsers(data);
        setLoading(false);
      })
      .catch(function(err) {
        setError('Eroare la incarcarea utilizatorilor');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="section-card"><p className="state-msg">Se incarca utilizatorii...</p></div>;
  if (error)   return <div className="section-card"><p className="state-msg error">{error}</p></div>;

  const filtered = users.filter(function(u) {
    return u.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="section-card">
      <h3>utilizatori — api public</h3>

      <div className="search-input">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="cauta dupa nume..."
        />
      </div>

      {filtered.length === 0
        ? <p className="state-msg">Niciun utilizator gasit.</p>
        : <ul className="user-list">
            {filtered.map(function(user) {
              return (
                <li key={user.id} className="user-item">
                  <span className="user-name">{user.name}</span>
                  <span className="user-meta">{user.email} · {user.company.name}</span>
                </li>
              );
            })}
          </ul>
      }
    </div>
  );
}

export default UserList;
