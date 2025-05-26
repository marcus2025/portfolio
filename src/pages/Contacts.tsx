import React from 'react'

const Contacts = () => {
  return (
    <section className="w-full   mx-auto py-12 md:py-20 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Contact Me
      </h1>
      <div className='lg:grid grid-cols-2 gap-6 mb-12'>
      <div className="bg-slate-900/80 rounded-xl p-8 shadow-lg flex flex-col items-center text-center mb-12">
        <p className="text-slate-300 mb-6 text-lg">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </p>
        <div className="flex flex-col gap-4 w-full items-center">
          <a
            href="mailto:dhruvverma.dev@gmail.com"
            className="text-cyan-400 hover:underline text-lg font-semibold"
          >
            dhruvverma.dev@gmail.com
          </a>
          <a
            href="https://github.com/dhruvverma2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
          >
            GitHub: dhruvverma2002
          </a>
          <a
            href="https://linkedin.com/in/janedoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
          >
            LinkedIn: linkedin.com/in/janedoe
          </a>
        </div>
        <div className="mt-8 text-slate-400 text-sm">
          Based in Jaipur, Rajasthan, India · Available for remote work
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="bg-slate-900/80 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Send Me a Message</h2>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-300 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-slate-300 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-slate-300 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contacts