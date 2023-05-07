import './App.css';
import Navibar from './Components/header/Navibar';
import Projects from './Components/projects/Projects';
import Contact from './Components/contact/Contact.js';
import About from './Components/about/About';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Navibar/>
      <About />
    </div>
  );
}

export default App;
