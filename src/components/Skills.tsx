import React from 'react';
import {
  BriefcaseIcon,
  CodeIcon,
  DatabaseIcon,
  LayoutDashboardIcon,
  Gamepad2Icon, // Added for Game Dev
  BoxIcon, // Added for 3D Modelling (using Box as a placeholder)
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: <LayoutDashboardIcon className="w-6 h-6 text-accent-teal" />,
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      name: 'Backend Development',
      icon: <CodeIcon className="w-6 h-6 text-accent-pink" />,
      skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs'],
    },
    {
      name: 'Databases',
      icon: <DatabaseIcon className="w-6 h-6 text-accent-purple" />,
      skills: ['SQL', 'NoSQL', 'MongoDB'],
    },
    {
      name: 'Creative & Game Dev', // New Category
      icon: <Gamepad2Icon className="w-6 h-6 text-yellow-400" />, // Example color
      skills: ['Luau (Roblox)', 'Blender (3D Modelling)'], // Added new skills
    },
    {
      name: 'DevOps & Tools',
      icon: <BriefcaseIcon className="w-6 h-6 text-gray-400" />,
      skills: ['Git', 'CI/CD', 'Docker'],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-section-gradient text-gray-200"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-teal text-glow">Skills Nebula</h2>
        {/* Adjusted grid columns for potentially 5 categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              // Added lg:last:col-span-1 lg:[&:nth-last-child(2)]:col-span-1 to handle 5 items better on large screens
              // If 5 items, the last two will center better on the last row if needed. Adjust col-span as needed.
              className={`p-6 bg-space-mid rounded-lg shadow-lg border border-space-light hover:border-accent-teal transition-all duration-300 transform hover:-translate-y-1 ${
                skillCategories.length === 5 && index >= 3 ? 'lg:col-span-1' : '' // Basic attempt to center last items if 5 total
              } ${skillCategories.length === 5 ? 'lg:last:justify-self-center lg:[&:nth-last-child(2)]:justify-self-center' : ''} `} // Trying to center last row items if 5
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-100">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-space-light text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-accent-teal hover:text-space-dark transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
