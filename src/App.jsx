 
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';
// import './styles/tailwind.css';

function App() {
  return (
     
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Netflix />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
