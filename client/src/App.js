import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Gallery from './pages/Gallery/Gallery'
import AboutUs from './pages/AboutUs/AboutUs'
import Events from './pages/Events/Events';
import Footer from './components/Footer/Footer';
import 'font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <div className="App">
      

      <Router>

        <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />






        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />

      </Routes>
      <Footer />


      </Router>
      
      
    </div>
    
  );
}

export default App;
