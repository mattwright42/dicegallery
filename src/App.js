import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Uploader from './Components/Uploader';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/images' element={<Gallery />} />
        <Route  path='/uploader' element={<Uploader />} />
      </Routes>
    </Router>
  )
}

export default App;
