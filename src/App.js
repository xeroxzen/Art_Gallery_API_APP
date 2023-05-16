import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import ArtWorks from './Pages/Artworks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/displayPage' element={<ArtWorks />} />
      </Routes>
    </div>
  );
}

export default App