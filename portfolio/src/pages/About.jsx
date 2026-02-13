import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-indigo-500">
            About Me
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I am a passionate Python Full Stack Developer specializing in
            building scalable web applications using React and Django.
            I focus on writing clean code, implementing secure authentication,
            and designing intuitive user interfaces.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Core Strengths</h3>
          <ul className="space-y-3 text-gray-300">
            <li>✔ REST API Development</li>
            <li>✔ JWT Authentication</li>
            <li>✔ Role-Based Access Control</li>
            <li>✔ Responsive UI Design</li>
            <li>✔ Database Optimization</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
