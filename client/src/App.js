import './App.css';
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Contact/>
    </div>
  );
}

export default App;
