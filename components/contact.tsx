const Contact = () => {
  return (
    <div id="contact" className="mb-15">
      <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold tracking-tight uppercase text-gray-100 mb-2">
          ¡Hablemos!
          </h2>
          <p className="text-lg text-gray-400">Escríbeme y comencemos a trabajar juntos</p>
        </div>
        <div className="max-w-lg mx-auto bg-gray-800 bg-opacity-30 rounded-lg shadow-md p-8">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-transparent leading-tight focus:outline-none focus:shadow-outline border-gray-700"
                id="name"
                type="text"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Asunto
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-transparent leading-tight focus:outline-none focus:shadow-outline border-gray-700"
                id="subject"
                type="text"
                placeholder="Asunto del mensaje"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-transparent leading-tight focus:outline-none focus:shadow-outline border-gray-700"
                id="message"
                rows={4}
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-950/80 hover:bg-blue-300 text-white border border-white-400 rounded-md px-4 py-2 text-sm transition-colors duration-300 hover:border-blue-300"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;