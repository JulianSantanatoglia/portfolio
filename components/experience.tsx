import { FaReact, FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const techStack = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
];

const Experience = () => {
  return (
    <div className="bg-blue-999 bg-opacity-70 text-gray-300 p-6 rounded-lg w-full">
      <div className="flex flex-row justify-center md:justify-start items-center gap-6">
        {techStack.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="flex items-center justify-center"
            aria-label={name}
            title={name}
          >
            <Icon className={`text-4xl md:text-5xl ${color}`} aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;