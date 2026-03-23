import { FaReact, FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
];

const Experience = () => {
  return (
    <div className="text-gray-300 w-full">
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4">
        {techStack.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="flex items-center justify-center rounded-md border border-gray-700/60 bg-gray-900/40 px-2.5 py-2 backdrop-blur-sm"
            aria-label={name}
            title={name}
          >
            <Icon className={`text-xl md:text-2xl ${color}`} aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;