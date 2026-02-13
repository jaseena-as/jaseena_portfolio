import { motion } from "framer-motion";

const SectionTitle = ({ title }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center mb-12 text-indigo-500"
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
