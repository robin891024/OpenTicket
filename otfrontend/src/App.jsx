import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Privacy from './pages/Privacy';
import FAQList from './pages/FAQList';
import Login from './pages/Login';
import Register from './pages/Register';
import MemberPage from './pages/MemberPage';
import SelectTicket from './pages/SelectTicket';
import { ToastProvider } from './components/ToastContext';
<<<<<<< HEAD
=======
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/CheckoutPage'; 
import SuccessPage from './pages/SuccessPage'; 
>>>>>>> e337bcd7368029f884354a4a952ff4ea21008e7b


function App() {
 return (
<<<<<<< HEAD
=======
  <>
>>>>>>> e337bcd7368029f884354a4a952ff4ea21008e7b
  <BrowserRouter> 
    <ToastProvider>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/news" element={<News />} /> 
    <Route path="/events" element={<Events />} />
    <Route path="/events/detail/:id" element={<EventDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/FAQList" element={<FAQList />} />
    <Route path="/register" element={<Register />} />
    <Route path="/Member/*" element={<MemberPage />} />
    <Route path="/Ticket" element={<SelectTicket />} />
<<<<<<< HEAD
    
    </Routes>
    </ToastProvider>
  </BrowserRouter>
=======
    <Route path="/checkout/:reservationId" element={<CheckoutPage />} />
    <Route path="/success" element={<SuccessPage />} />
    </Routes>
    
    </ToastProvider>
  </BrowserRouter>
  <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  
>>>>>>> e337bcd7368029f884354a4a952ff4ea21008e7b
 );
}

export default App;