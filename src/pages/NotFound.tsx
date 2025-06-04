import { useNavigate } from "react-router-dom"

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center py-20 animate-fade-in-up">
   

      <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">Page Not Found</h2>
      <p className="text-slate-300 mb-8 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
      </p>
      <div className="flex  items-center gap-4">
      <a
        href="/"
        className="mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
      >
        Go Home
      </a>   <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200" 
      >
        &larr; Go Back
      </button>
      </div>
    </section>
  )
}

export default NotFound