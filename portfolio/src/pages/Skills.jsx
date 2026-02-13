import React from "react";
import { skills } from "../data/skills"; // adjust path if needed

const Skills = () => {
  return (
    <section className="py-8 bg-gray-900 text-white" id="skills">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{skill.name}</h3>
            <p className="text-gray-400">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
