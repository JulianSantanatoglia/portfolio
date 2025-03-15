const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 text-center border-t border-gray-800 font-sans text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Julian Santanatoglia. Todos los derechos reservados.</p>
        <nav className="mt-4">
          <a href="/politica-privacidad" className="text-gray-200 no-underline mx-4">Política de Privacidad</a>
          <a href="/terminos-uso" className="text-gray-200 no-underline mx-4">Términos de Uso</a>
          <a href="/contacto" className="text-gray-200 no-underline mx-4">Contacto</a>
        </nav>
        <div className="mt-6">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 mx-2"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 mx-2"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 mx-2"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;