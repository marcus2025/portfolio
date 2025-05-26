
const HeroSection = () => {
  return (
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 md:py-24 animate-fade-in">
          {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Hi, I'm Dhruv Verma
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-slate-300 mb-8 font-medium">
          Full-Stack Developer crafting modern web experiences with React, Node.js, and more.
        </p>
        <a href="#projects" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-cyan-500 transition-transform duration-200">
          View My Work
        </a>
      </section>
  )
}

export default HeroSection