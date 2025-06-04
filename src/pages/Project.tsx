import { useParams, useNavigate, Navigate } from 'react-router-dom'

// const demo = {
//   id: 'project-management-dashboard',
//   title: 'Project Management Dashboard',
//   image: '/project-dashboard.jpg', // Replace with your actual image path
//   description:
//     'A real-time dashboard for managing projects, tasks, and teams. Built with React, Node.js, WebSockets, and MongoDB. Features drag-and-drop, notifications, and analytics.',
//   features: [
//     'Real-time collaboration with WebSockets',
//     'Drag-and-drop task management',
//     'Customizable project views',
//     'User authentication and roles',
//     'Analytics and reporting dashboard',
//     'Responsive and accessible UI',
//   ],
//   techStack: [
//     'React',
//     'Node.js',
//     'Express',
//     'MongoDB',
//     'WebSockets',
//     'Tailwind CSS',
//   ],
//   links: {
//     live: 'https://your-live-demo.com',
//     github: 'https://github.com/yourusername/project-dashboard',
//   },
// }


const projects = [
  {
    id: 'project-management-dashboard',
    title: 'Project Management Dashboard',
    image: '/images/Project Management Dashboard.png',
    description: 'A real-time dashboard for managing projects, tasks, and teams. Built with React, Node.js, WebSockets, and MongoDB.',
    features: [
      'Real-time collaboration with WebSockets',
      'Drag-and-drop task management',
      'User roles and permissions',
      'Analytics with visual charts',
      'Task deadlines and priority labels',
      'Responsive design for all screen sizes',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'Tailwind CSS'],
    links: {
      live: 'https://project-dashboard-demo.vercel.app',
      github: 'https://github.com/dhruvverma/project-management-dashboard',
    },
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    image: '/images/E-Commerce Platform.png',
    description: 'A scalable e-commerce platform with product management, payments, and user accounts.',
    features: [
      'Product listings with filters and search',
      'Stripe payment gateway integration',
      'Admin dashboard for inventory management',
      'Secure authentication with JWT',
      'Order history and status tracking',
      'Mobile-first responsive UI',
    ],
    techStack: ['Next.js', 'Express', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
    links: {
      live: 'https://ecommerce-demo.vercel.app',
      github: 'https://github.com/dhruvverma/e-commerce-platform',
    },
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    image: '/images/Personal Portfolio.png',
    description: 'A sleek and modern developer portfolio to showcase skills, resume, and projects.',
    features: [
      'Project showcase with tags and filters',
      'Animated transitions and hover effects',
      'Downloadable resume section',
      'Responsive layout with mobile-first design',
      'Contact form with email integration',
      'Dark/light theme toggle',
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    links: {
      live: 'https://dhruv-portfolio.vercel.app',
      github: 'https://github.com/dhruvverma/portfolio',
    },
  },
  {
    id: 'chat-application',
    title: 'Chat Application',
    image: '/images/Chat Application.png',
    description: 'A real-time chat app for private and group conversations, built with sockets.',
    features: [
      'Real-time messaging with Socket.io',
      'User authentication and profiles',
      'Group and one-to-one chat support',
      'Typing indicators and message timestamps',
      'Online/offline user status',
      'Responsive chat interface',
    ],
    techStack: ['React', 'Node.js', 'Socket.io', 'Express', 'MongoDB', 'Tailwind CSS'],
    links: {
      live: 'https://chatapp-demo.vercel.app',
      github: 'https://github.com/dhruvverma/chat-application',
    },
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    image: '/images/Blog Platform.png',
    description: 'A powerful blogging platform with markdown support and user comments.',
    features: [
      'Markdown editor with preview mode',
      'User authentication and role-based access',
      'Post categories and tags',
      'Comments section with moderation tools',
      'SEO-optimized routes and meta tags',
      'Dashboard for post management',
    ],
    techStack: ['Next.js', 'MongoDB', 'Auth.js', 'Tailwind CSS', 'MDX'],
    links: {
      live: 'https://blog-platform-demo.vercel.app',
      github: 'https://github.com/dhruvverma/blog-platform',
    },
  },
]

const Project = () => {

  const navigate = useNavigate();

  const { id } = useParams()
  const project = projects.find(p => p.id === id) ;
  
  if (!project) {
    return <Navigate to="/not-found" replace />; 
  }
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-20 animate-fade-in-up">
        <button
    onClick={() => {  
      navigate(-1);
    }}
    className="mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200" 
  >
    &larr; Back to Projects
  </button>
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
