const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 text-center border-t border-gray-800 font-sans text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Julian Santanatoglia. Todos los derechos reservados.</p>
        <nav className="mt-4">
          <a href="#" className="text-gray-200 no-underline mx-4">Política de Privacidad</a>
          <a href="#" className="text-gray-200 no-underline mx-4">Términos de Uso</a>
          <a href="#contact" className="text-gray-200 no-underline mx-4">Contacto</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;