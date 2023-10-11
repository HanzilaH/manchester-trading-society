import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Team from '../Team/Team';
import Gallery from '../Gallery/Gallery'
import AboutUs from '../AboutUs/AboutUs'
import Events from '../Events/Events';
import Footer from '../../components/Footer/Footer';
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
