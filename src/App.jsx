import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Shows from './pages/Shows';
import Login from './pages/login';



function App() {
 return (
  <BrowserRouter> 

   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/news" element={<News />} /> 
    <Route path="/shows" element={<Shows />} />
    <Route path="/login" element={<Login />} />
    
   </Routes>

  </BrowserRouter>
 );
}

export default App;