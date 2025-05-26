
const services = [
  {
    title: 'Custom Web Development',
    description: 'End-to-end web application development using modern frameworks like React, Next.js, and Node.js. Tailored solutions for startups, businesses, and enterprises.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive, accessible, and visually appealing interfaces. Focused on user experience, responsive layouts, and brand consistency.',
    icon: '🎨',
  },
  {
    title: 'API & Backend Engineering',
    description: 'Building robust RESTful and GraphQL APIs, scalable backend systems, and secure authentication. Expertise in Node.js, Express, and databases.',
    icon: '🔗',
  },
  {
    title: 'DevOps & Cloud Deployment',
    description: 'CI/CD pipelines, Dockerization, cloud deployment (AWS, Vercel, Netlify), and performance optimization for seamless delivery and scaling.',
    icon: '☁️',
  },
  {
    title: 'Consulting & Code Review',
    description: 'Technical consulting, code audits, and best practice guidance for teams and individuals. Improve code quality, security, and maintainability.',
    icon: '🧑‍💻',
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support, bug fixes, and feature enhancements to keep your applications running smoothly and securely.',
    icon: '🔧',
  },
];

const Services = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 md:py-20 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        My Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-slate-900/80 rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-200 text-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold mb-2 text-cyan-400">{service.title}</h2>
            <p className="text-slate-300 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services