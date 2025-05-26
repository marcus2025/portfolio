import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
      <div className="mb-2 md:mb-0">
        © {new Date().getFullYear()} Dhruv Verma. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/dhruvverma2002"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/dhruv-verma-31330730b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a
          href="mailto:dhruvverma.dev@gmail.com"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          Email
        </a>
      </div>
    </footer>
  )
}

export default Footer