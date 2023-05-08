import Navibar from './Components/header/Navibar';
import Projects from './Components/projects/Projects';
import Contact from './Components/contact/Contact.js';
import About from './Components/about/About';
import Qualification from './Components/Qualification/Qualification';
import Home from './Components/home/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


function App() {

  
  return (
    <div className="App">
      <Navibar />
      <Home />
      <About />
      <Projects />
      <Qualification />
      <Contact />
    </div>
  );
}

export default App;
