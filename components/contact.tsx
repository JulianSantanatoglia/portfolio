import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight uppercase text-gray-100 mb-4">
            ¡Hablemos!
          </h2>
          <p className="text-lg text-gray-400">Escríbeme y comencemos a trabajar juntos</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="mailto:juliansantanatoglia@gmail.com"
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <Mail className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 mb-4">juliansantanatoglia@gmail.com</p>
              <button className="px-6 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors duration-300">
                Enviar mensaje
              </button>
            </div>
          </a>
          <a
            href="https://wa.me/34671458720"
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                <MessageCircle className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 mb-4">Envíame un mensaje directo</p>
              <button className="px-6 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors duration-300">
                Enviar mensaje
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;