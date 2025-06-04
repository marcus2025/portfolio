import { Link } from 'react-router'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'project-management-dashboard',
    title: 'Project Management Dashboard',
    image: '/images/Project Management Dashboard.png',
    description: 'A real-time dashboard for managing projects, tasks, and teams. Built with React, Node.js, WebSockets, and MongoDB.',
    link: '/project',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    image: '/images/E-Commerce Platform.png',
    description: 'A scalable e-commerce solution with product management, payment integration, and user authentication. Built with Next.js, Express, PostgreSQL, and Stripe API.',
    link: '#',
    tags: ['Next.js', 'Express', 'PostgreSQL', 'Stripe'],
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    image: '/images/Personal Portfolio.png',
    description: 'A modern, responsive portfolio website to showcase skills, projects, and contact information. Built with React and Tailwind CSS.',
    link: '#',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    id: 'chat-application',
    title: 'Chat Application',
    image: '/images/Chat Application.png',
    description: 'A real-time chat application with private and group messaging, built using React, Node.js, and Socket.io.',
    link: '#',
    tags: ['React', 'Node.js', 'Socket.io'],
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    image: '/images/Blog Platform.png',
    description: 'A full-featured blog platform with markdown support, comments, and user authentication. Built with Next.js and MongoDB.',
    link: '#',
    tags: ['Next.js', 'MongoDB'],
  },
]

const ProjectsHome = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 md:py-20 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Projects Showcase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + idx * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,255,255,0.10)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900/80 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-200 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl mb-4"
            />
            <div className="flex-1 flex flex-col px-6 pb-6">
              <h2 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h2>
              <p className="text-slate-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-semibold shadow"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 + i * 0.05 + idx * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.13, background: 'linear-gradient(90deg,#06b6d4,#6366f1)' }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <Link
                to={`/projects/${project.id}`}
                className="mt-auto inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
              >
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsHome
