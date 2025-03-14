const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#1a1a1a', 
      color: '#e0e0e0', 
      padding: '2rem 0', 
      textAlign: 'center',
      fontFamily: 'sans-serif',
      fontSize: '0.9rem',
      borderTop: '1px solid #333' 
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        <nav style={{ marginTop: '1rem' }}>
          <a href="/politica-privacidad" style={{ color: '#e0e0e0', textDecoration: 'none', margin: '0 1rem' }}>Política de Privacidad</a>
          <a href="/terminos-uso" style={{ color: '#e0e0e0', textDecoration: 'none', margin: '0 1rem' }}>Términos de Uso</a>
          <a href="/contacto" style={{ color: '#e0e0e0', textDecoration: 'none', margin: '0 1rem' }}>Contacto</a>
        </nav>
        <div style={{ marginTop: '1.5rem' }}>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" style={{ color: '#e0e0e0', margin: '0 0.5rem' }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer" style={{ color: '#e0e0e0', margin: '0 0.5rem' }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" style={{ color: '#e0e0e0', margin: '0 0.5rem' }}>
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;