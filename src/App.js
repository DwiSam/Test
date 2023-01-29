import "./App.css";
import Hero from "./components/Hero/Index";
import Skills from "./components/Skills/Index";
import Projects from "./components/Projects/Index";
import Contact from "./components/Contact/Index";
import Nav from "./components/Navigations/Index";
import Kerja from "./components/kerja/Index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Kerja/>
      <Contact />
    </div>
  );
}

export default App;
