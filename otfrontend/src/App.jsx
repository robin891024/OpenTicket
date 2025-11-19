import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Login from './pages/login';
import Privacy from './pages/Privacy';
import FAQList from './pages/FAQList';


function App() {
 return (
  <BrowserRouter> 

   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/news" element={<News />} /> 
    <Route path="/events" element={<Events />} />
    <Route path="/events/detail/:id" element={<EventDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/FAQList" element={<FAQList />} />
    
   </Routes>

  </BrowserRouter>
 );
}

export default App;