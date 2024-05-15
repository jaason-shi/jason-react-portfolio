import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
