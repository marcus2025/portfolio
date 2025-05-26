import { Navigate, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import ProjectsHome from "./pages/ProjectsHome";
import NotFound from "./pages/NotFound";

function App() {
  return (

    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<ProjectsHome />} />
          <Route path="/not-found" element={<NotFound/>}/>
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
    </Routes>
  )
}

export default App
