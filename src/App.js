import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import ArtWorks from './Pages/Artworks';
import Exhibitions from './Pages/Exhibitions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/displayPage' element={<ArtWorks />} />
        <Route path='/exhibitions' element={<Exhibitions/>} />
      </Routes>
    </div>
  );
}

export default App