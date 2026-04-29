import { Link } from 'react-router';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '80px' }}>
      <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>
      <h2>Pagina nu exista</h2>
      <p style={{ marginBottom: '32px' }}>URL-ul accesat nu a fost gasit.</p>
      <Link to="/" style={{ color: 'var(--accent)' }}>← inapoi acasa</Link>
    </div>
  );
}

export default NotFound;
