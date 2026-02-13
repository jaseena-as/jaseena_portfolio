import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800"
    >
      <h3 className="text-xl font-bold mb-3 text-indigo-400">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs bg-gray-800 px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="text-indigo-500 flex items-center gap-2 hover:underline"
      >
        <FaGithub />
        View Code
      </a>
    </motion.div>
  );
};

export default ProjectCard;
