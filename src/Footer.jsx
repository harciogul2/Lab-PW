function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '20px 24px',
      textAlign: 'center',
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }}>
      iaru briana maria · laborator pw · {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
