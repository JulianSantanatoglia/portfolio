const Experience = () => {
    return (
      <div className="bg-blue-999 bg-opacity-70 text-gray-300 p-6 rounded-lg w-full">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row items-start">
            <div className="text-left mb-4 md:mb-0">
              <span className="text-4xl font-bold text-green-400">+2</span>
              <p className="mt-1 text-lg font-semibold">EXPERIENCIA</p>
            </div>
            <div className="hidden md:block border-l border-gray-600 h-16 mx-4"></div>
            <div className="block md:hidden border-b border-gray-600 w-16 my-3"></div>
            <div className="text-left mb-4 md:mb-0">
              <span className="text-4xl font-bold text-blue-400">+15</span>
              <p className="mt-1 text-lg font-semibold">PROYECTOS</p>
            </div>
            <div className="hidden md:block border-l border-gray-600 h-16 mx-4"></div>
            <div className="block md:hidden border-b border-gray-600 w-16 my-3"></div>
            <div className="text-left">
              <span className="text-4xl font-bold text-yellow-400">+10</span>
              <p className="mt-1 text-lg font-semibold">CERTIFICACIONES</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Experience;