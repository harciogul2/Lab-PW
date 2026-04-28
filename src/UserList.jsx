import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(function() {
    // singura diferenta fata de JSON local: URL complet in loc de cale locala
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

  if (loading) {
    return <p>Se incarca utilizatorii...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  const filtered = users.filter(function(u) {
    return u.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
      <h3>Utilizatori (API public JSONPlaceholder)</h3>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="cauta dupa nume..."
        style={{ padding: '8px', marginBottom: '15px', width: '100%', boxSizing: 'border-box' }}
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map(function(user) {
          return (
            <li key={user.id} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              <strong>{user.name}</strong> — {user.email} — {user.company.name}
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 && <p>Niciun utilizator gasit.</p>}
    </div>
  );
}

export default UserList;
