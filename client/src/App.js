import Navbar from "./components/navbar";
import Landing from "./components/landing";
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
