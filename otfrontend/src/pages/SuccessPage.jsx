import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const SuccessPage = () => {
  const [reservationId, setReservationId] = useState("");

  useEffect(() => {
    const storedReservationId = localStorage.getItem("reservationId");
    if (storedReservationId) {
      console.log(storedReservationId);
      setReservationId(storedReservationId);
      console.log(reservationId);
    }
    const change = async(e) => {

      try {
        const response = await fetch("http://localhost:8080/api/reservations/change", {
          method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    reservationId: Number(storedReservationId)
                }),
                credentials: "include"
        });
        const data = await response.json();
        console.log(data);
        localStorage.removeItem("reservationId");
      } catch (error) {
        console.error(error);
      }
    }
    
    change();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h1>
          <p className="text-gray-600 mb-8">您的訂單已成功建立</p>

          <Link to="/" className="block w-full py-3 rounded bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition shadow-sm">
            回首頁
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;