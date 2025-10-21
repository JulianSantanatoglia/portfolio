import { Mail, MessageCircle, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">¿Tienes un proyecto en mente?</span>
          </div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            ¡Hablemos!
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Escríbeme y hagamos realidad tu próximo proyecto. Estoy disponible para nuevas oportunidades
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Card */}
          <a
            href="mailto:juliansantanatoglia@gmail.com"
            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
            
            <div className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-500/30">
                  <Mail className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                Email
              </h3>
              <p className="text-gray-400 mb-6 text-sm break-all">juliansantanatoglia@gmail.com</p>
              
              <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-blue-400 rounded-xl group-hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all"></span>
                <span className="relative font-semibold">Enviar mensaje</span>
                <Send className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/34671458720"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300"></div>
            
            <div className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-green-500/30">
                  <MessageCircle className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all">
                WhatsApp
              </h3>
              <p className="text-gray-400 mb-6">Envíame un mensaje directo y respondo rápido</p>
              
              <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 text-green-400 rounded-xl group-hover:border-green-400/50 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all"></span>
                <span className="relative font-semibold">Enviar mensaje</span>
                <Send className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            También puedes encontrarme en mis redes sociales
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;