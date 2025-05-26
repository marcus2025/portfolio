
const About = () => {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 py-12 md:py-20 animate-fade-in-up">
      {/* Profile Image Section */}
      <div className="flex-shrink-0 mb-8 md:mb-0">
        <img
          src="src/assets/dhruv.jpeg"
          alt="Dhruv Verma profile"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
        />
      </div>
      {/* Details and Achievements */}
      <div className="flex-1 text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg text-slate-300 mb-6">
          Hi! I'm Dhruv Verma, a dedicated Full-Stack Developer with a passion for building robust, user-centric web applications. My journey in tech began over 5 years ago, and since then, I've contributed to a variety of projects, from startups to enterprise solutions. I thrive on solving complex problems, learning new technologies, and collaborating with creative teams.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Core Skills</h2>
          <ul className="list-disc list-inside text-slate-400 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
            <li>React, Next.js, TypeScript, Tailwind CSS</li>
            <li>Node.js, Express, REST & GraphQL APIs</li>
            <li>MongoDB, PostgreSQL, Prisma</li>
            <li>Docker, AWS, CI/CD, GitHub Actions</li>
            <li>UI/UX Design, Accessibility, Responsive Design</li>
            <li>Testing (Jest, Cypress), Agile Methodologies</li>
          </ul>
        </div>
        {/* Achievements Section */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Achievements</h2>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>
              <span className="font-semibold text-slate-200">Built and launched</span> a SaaS platform used by 10,000+ users worldwide.
            </li>
            <li>
              <span className="font-semibold text-slate-200">Winner</span> of the 2024 Global Hackathon (Web Apps category).
            </li>
            <li>
              <span className="font-semibold text-slate-200">Speaker</span> at React Summit 2023 on "Modern Frontend Architectures".
            </li>
            <li>
              <span className="font-semibold text-slate-200">Open-source contributor</span> to several popular JavaScript libraries.
            </li>
            <li>
              <span className="font-semibold text-slate-200">Published author</span> of articles on web development best practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About