import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ToonSnap.art',
      description: 'AI-powered platform transforming photos into cartoon styles. Built with modern web technologies.',
      // Reference image from public folder
      imageUrl: '/toonsnap.webp', // Assuming you saved the ToonSnap image here
      liveUrl: 'https://toonsnap.art',
      githubUrl: '#',
      tags: ['AI', 'React', 'Next.js', 'Cloud Services', 'Image Generation'],
    },
    {
      title: 'Un Poco de Tecnología',
      description: 'Technology news portal focusing on web development, gadgets, and industry trends.',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080', // Keeping the placeholder for this one
      liveUrl: 'https://unpocodetecnologia.es',
      githubUrl: '#',
      tags: ['Blog', 'PHP', 'SEO', 'Content Creation', 'Web Development'],
    },
    {
      title: 'Rengoku.es',
      description: 'Website for a multi-functional Discord bot, providing command lists, guides, and support information.',
      // Reference image from public folder
      imageUrl: '/rengoku.jpg', // Assuming you saved the Rengoku image here
      liveUrl: 'https://rengoku.es',
      githubUrl: '#',
      tags: ['Discord Bot', 'Community', 'JavaScript', 'Node.js', 'Web Interface'],
    },
  ];

  return (
    <section id="projects" className="py-20 text-gray-200 relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold font-heading text-center mb-16 text-accent-teal text-glow-strong animate-pulse-slow">Project Portals</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-base group [perspective:1000px] transform transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_35px_theme('colors.accent-pink/60%'),0_0_50px_theme('colors.accent-purple/40%')] hover:border-accent-teal/80"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-t-lg transform transition-transform duration-500 group-hover:[transform:rotateY(8deg)_translateX(8px)_scale(1.05)] border-b-2 border-accent-teal/30 group-hover:border-accent-teal/70">
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 ease-in-out overflow-hidden rounded-t-lg">
                    <div className="absolute inset-[-50%] w-[200%] h-[200%] bg-gradient-radial from-accent-pink/40 via-accent-purple/30 to-transparent animate-portal-swirl"></div>
                 </div>
                 <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:opacity-90 relative z-10"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-space-mid via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500 z-10"></div>
                 <div className="absolute inset-0 ring-1 ring-inset ring-accent-teal/40 group-hover:ring-accent-teal/70 transition duration-500 rounded-t-lg opacity-60 group-hover:opacity-100 z-10"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold font-heading mb-2 text-gray-100 group-hover:text-accent-teal transition duration-300">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 h-16 overflow-hidden font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 min-h-[36px]">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-space-light text-accent-teal px-2 py-1 rounded text-xs font-medium font-body opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end space-x-4 mt-auto pt-4 border-t border-space-light/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-teal transition duration-300 flex items-center text-sm font-body"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent-teal transition duration-300 flex items-center text-sm font-body"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
