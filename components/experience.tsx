const Experience = () => {
  return (
    <div
      className="bg-blue-999 bg-opacity-70 text-gray-300 px-4 py-4 rounded-lg w-full md:w-1/2 md:mx-auto" // Reducido px y py, w-2/3 a w-1/2
    >
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <div className="text-center mx-2">
            <span className="text-3xl font-bold text-green-400">+2</span> 
            <p className="mt-1 text-base">EXPERIENCIA</p> 
          </div>
          <div className="border-l border-gray-600 h-12 mx-2"></div> 
          <div className="text-center mx-2"> 
            <span className="text-3xl font-bold text-blue-400">+15</span> 
            <p className="mt-1 text-base">PROYECTOS</p> 
          </div>
          <div className="border-l border-gray-600 h-12 mx-2"></div> 
          <div className="text-center mx-2"> 
            <span className="text-3xl font-bold text-yellow-400">+10</span> 
            <p className="mt-1 text-base">CERTIFICACIONES</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;