const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 pb-20 md:pb-8 text-center border-gray-800 font-sans text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Julian Santanatoglia. Todos los derechos reservados.</p>
        <nav className="mt-4">
        </nav>
      </div>
    </footer>
  );
};

export default Footer;