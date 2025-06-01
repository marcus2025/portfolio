import { Link } from "react-router";
import { motion, useScroll } from "motion/react";

const Home = () => {
 

  const scrollY = useScroll().scrollYProgress;
  return (
         
    <section className="w-full flex flex-col items-center justify-center text-center py-12 md:py-20 ">
      <motion.div
        style={{ scaleX: scrollY }}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 w-full h-1 rounded-4xl fixed top-0 left-0 z-100"
      ></motion.div>
      {/* Hero Section */}
      <motion.h1
        animate={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        initial={{
          opacity: 0,
          y: -50,
          x: 0,
        }}
        transition={{
          // duration: 3,
          ease: "easeInOut",
          // delay: 0.2
        }}
        whileHover={{
          scale: 1.1,
          
          transition: { duration: 0.3 },
        }}
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 drop-shadow-lg"
      >
        Hi, I'm Dhruv Verma
      </motion.h1>
      <motion.p
              animate={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        initial={{
          opacity: 0,
          y: -50,
          x: 0,
        }}
        transition={{
          // duration: 3,
          ease: "easeInOut",
          // delay: 0.2
        }}
      className="max-w-2xl text-lg md:text-2xl text-slate-300 mb-8 font-medium">
        I'm a passionate Full-Stack Developer specializing in building modern,
        scalable web applications with React, Node.js, and more. I love turning
        ideas into reality through code and design.
      </motion.p>
      <div className="flex flex-col md:flex-row gap-4 mb-12">

         <Link
          to="/projects"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-cyan-500 transition-transform duration-200"
          >
        {/* <motion.a
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          initial={{
            opacity: 0,
            y: -50,
            x: 0,
          }}
          transition={{
            // duration: 3,
            ease: "easeInOut",
            // delay: 0.2
          }}  
         className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-cyan-500 transition-transform duration-200"
         >    */}

          View Projects
          {/* </motion.a> */}
        </Link>
                <Link
          to="/about"
          className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white transition-colors duration-200"
          >
        {/* <motion.a
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          initial={{
            opacity: 0,
            y: -50,
            x: 0,
          }}
          transition={{
            // duration: 3,
            ease: "easeInOut",
            // delay: 0.2
          }}  
          className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white transition-colors duration-200"

        >    */}

          About Me
        {/* </motion.a> */}
        </Link>
      </div>

      {/* Tech Stack Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <motion.div 
         whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,255,255,0.10)' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        className="bg-slate-900/80 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-200">
          <h2 className="text-xl font-bold mb-2 text-cyan-400">Frontend</h2>
          <p className="text-slate-300">
            React, TypeScript, Tailwind CSS, Next.js, UI/UX, Redux, Framer
            Motion, Chart.js
          </p>
        </motion.div>
        <motion.div 
         whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,255,255,0.10)' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        className="bg-slate-900/80 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-200">
          <h2 className="text-xl font-bold mb-2 text-cyan-400">Backend</h2>
          <p className="text-slate-300">
            Node.js, Express, REST APIs, GraphQL, MongoDB, PostgreSQL, SQL,
            Prisma, JWT, WebSockets
          </p>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,255,255,0.10)' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }} 
         className="bg-slate-900/80 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-200">
          <h2 className="text-xl font-bold mb-2 text-cyan-400">
            DevOps & Tools
          </h2>
          <p className="text-slate-300">
            Docker, Git, GitHub Actions, CI/CD, AWS, Vercel, Netlify, Nginx,
            Testing (Jest, Cypress)
          </p>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-3xl mt-16 text-left"
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-slate-300 mb-4"
        >
          With over 5 years of experience in the tech industry, I have worked on
          a wide range of projects, from dynamic single-page applications to
          robust backend systems. My approach combines clean code, modern
          design, and a focus on user experience. I enjoy collaborating with
          teams, mentoring junior developers, and constantly learning new
          technologies.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="list-disc list-inside text-slate-400 mb-4"
        >
          <li>Agile & Scrum methodologies</li>
          <li>API design & integration</li>
          <li>Authentication & security best practices</li>
          <li>Performance optimization</li>
          <li>Accessibility & responsive design</li>
          <li>Automated testing & code quality</li>
        </motion.ul>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-slate-300"
        >
          Outside of coding, I enjoy hiking, photography, and contributing to
          open-source projects.
        </motion.p>
      </motion.div>

      {/* Featured Projects Preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mt-20"
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 text-cyan-400 text-left"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-slate-900/80 rounded-xl p-6 shadow-lg flex flex-col hover:shadow-cyan-500/20 transition-shadow duration-200"
          >
            <h3 className="text-lg font-bold text-cyan-300 mb-2">
              Project Management Dashboard
            </h3>
            <p className="text-slate-300 mb-2">
              A real-time dashboard for managing projects, tasks, and teams.
              Built with React, Node.js, WebSockets, and MongoDB. Features
              drag-and-drop, notifications, and analytics.
            </p>
            <a href="#" className="text-cyan-400 hover:underline self-start">
              View Details
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-slate-900/80 rounded-xl p-6 shadow-lg flex flex-col hover:shadow-cyan-500/20 transition-shadow duration-200"
          >
            <h3 className="text-lg font-bold text-cyan-300 mb-2">
              E-Commerce Platform
            </h3>
            <p className="text-slate-300 mb-2">
              A scalable e-commerce solution with product management, payment
              integration, and user authentication. Built with Next.js, Express,
              PostgreSQL, and Stripe API.
            </p>
            <a href="#" className="text-cyan-400 hover:underline self-start">
              View Details
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link
            to="/projects"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            See All Projects
          </Link>
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mt-20"
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 text-cyan-400 text-left"
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-slate-900/80 rounded-xl p-6 shadow-lg"
          >
            <p className="italic text-slate-300 mb-2">
              “Jane is a highly skilled developer who delivers quality work on
              time. Her attention to detail and problem-solving skills are
              top-notch.”
            </p>
            <span className="text-cyan-300 font-semibold">
              — Alex Smith, Product Manager
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-slate-900/80 rounded-xl p-6 shadow-lg"
          >
            <p className="italic text-slate-300 mb-2">
              “Working with Jane was a fantastic experience. She communicates
              clearly and always goes the extra mile.”
            </p>
            <span className="text-cyan-300 font-semibold">
              — Maria Garcia, Team Lead
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-2xl mt-20 mb-8 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400"
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-slate-300 mb-6"
        >
          Interested in collaborating or have a project in mind? Reach out and
          let's build something amazing together!
        </motion.p>
        <Link
          to="/contact"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>

);
};

export default Home;
