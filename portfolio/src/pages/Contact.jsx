// import { motion } from "framer-motion";
// import SectionTitle from "../components/SectionTitle";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section className="py-20 max-w-4xl mx-auto px-6">
//       <SectionTitle title="Get In Touch" />

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-gray-900 p-10 rounded-2xl border border-gray-800 shadow-xl"
//       >
//         {/* Intro Text */}
//         <p className="text-gray-400 text-center mb-8">
//           I'm open to full-stack developer opportunities and collaborations.
//           Feel free to reach out.
//         </p>

//         {/* Contact Form */}
//         <form className="space-y-6">
//           <div>
//             <label className="block text-gray-300 mb-2">Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-300 mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="your.email@example.com"
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-300 mb-2">Message</label>
//             <textarea
//               rows="4"
//               placeholder="Your message..."
//               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg transition font-semibold"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="my-8 border-t border-gray-800"></div>

//         {/* Direct Contact Info */}
//         <div className="text-center space-y-4">
//           <p className="flex justify-center items-center gap-2 text-indigo-400">
//             <FaEnvelope />
//             asjaseena31@gmail.com
//           </p>

//           <div className="flex justify-center gap-6 text-2xl text-gray-400">
//             <a
//               href="https://github.com/jaseena-as"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-indigo-500 transition"
//             >
//               <FaGithub />
//             </a>

//             <a
//               href="https://linkedin.com/in/jaseena-a-s"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-indigo-500 transition"
//             >
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;



import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qy79kdl",
        "template_tkq32nm",
        formData,
        "HaCOktQ5Q-cBvI-DC"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        () => {
          setStatus("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <SectionTitle title="Get In Touch" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 p-10 rounded-2xl border border-gray-800 shadow-xl"
      >
        <p className="text-gray-400 text-center mb-8">
          I'm open to full-stack developer opportunities and collaborations.
          Feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

          <input
            type="email"
            name="user_email"
            placeholder="your.email@example.com"
            value={formData.user_email}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg transition font-semibold"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-green-400 mt-4">{status}</p>
          )}
        </form>

        <div className="my-8 border-t border-gray-800"></div>

        <div className="text-center space-y-4">
          <p className="flex justify-center items-center gap-2 text-indigo-400">
            <FaEnvelope />
            asjaseena31@gmail.com
          </p>

          <div className="flex justify-center gap-6 text-2xl text-gray-400">
            <a
              href="https://github.com/jaseena-as"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/jaseena-a-s"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;