import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 text-white font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-30 shadow-lg bg-slate-950/80 backdrop-blur-md">
        <Navbar />
      </header>

      

      {/* Main Content (Projects, About, etc.) */}
      <main id="main-content" className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 animate-fade-in-up">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-8 bg-slate-950/90 border-t border-slate-800 shadow-inner animate-fade-in">
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout