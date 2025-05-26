
const project = {
  title: 'Project Management Dashboard',
  image: '/project-dashboard.jpg', // Replace with your actual image path
  description:
    'A real-time dashboard for managing projects, tasks, and teams. Built with React, Node.js, WebSockets, and MongoDB. Features drag-and-drop, notifications, and analytics.',
  features: [
    'Real-time collaboration with WebSockets',
    'Drag-and-drop task management',
    'Customizable project views',
    'User authentication and roles',
    'Analytics and reporting dashboard',
    'Responsive and accessible UI',
  ],
  techStack: [
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'WebSockets',
    'Tailwind CSS',
  ],
  links: {
    live: 'https://your-live-demo.com',
    github: 'https://github.com/yourusername/project-dashboard',
  },
}

const Project = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-20 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        {project.title}
      </h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-xl shadow-lg mb-8 object-cover max-h-96"
      />
      <p className="text-lg text-slate-300 mb-6">{project.description}</p>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-cyan-400 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-slate-400 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-cyan-400 mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-sm font-semibold shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Live Demo
        </a>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white transition-colors duration-200"
        >
          GitHub Repo
        </a>
      </div>
    </section>
  )
}

export default Project
