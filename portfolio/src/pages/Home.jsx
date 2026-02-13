import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      
      <div className="max-w-4xl text-center">

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-indigo-500">Jaseena A S</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          <TypeAnimation
            sequence={[
              "Python Full Stack Developer",
              2000,
              "React & Django Specialist",
              2000,
              "Building Scalable Web Applications",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 max-w-2xl mx-auto mb-8"
        >
          I design and develop full-stack web applications with clean UI,
          secure authentication, and scalable backend architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          <Link
            to="/projects"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg transition"
          >
            View Projects
          </Link>

          <a
            href="jaseena_portfolio/Jaseena_A_S.pdf"
            download="Jaseena_A_S_Resume.pdf"
            className="border border-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-6 mt-10 text-2xl"
        >
          <a href="https://github.com/jaseena-as" className="hover:text-indigo-500 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/jaseena-a-s" className="hover:text-indigo-500 transition">
            <FaLinkedin />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
