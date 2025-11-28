import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import Breadcrumb from "../components/Breadcrumb";
import EventHero from "../components/EventHero";
import EventShareActions from "../components/EventShareActions";
import EventIntro from "../components/EventIntro";
import EventNote from "../components/EventNote";


export default function EventDetail() {
  // 假設未登入與未收藏，未來可接 API
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 預設未登入
  const [isFavorited, setIsFavorited] = useState(false); // 預設未收藏
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/api/events")
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => setEvents(Array.isArray(data) ? data : []))
      .catch(() => setEvents([]))
      .finally(() => setLoading(false));
  }, []);

  const event = events.find(e => String(e.id) === String(id));
  if (loading) {
    return <div className="text-center py-12">載入中...</div>;
  }
  if (!event) {
    navigate("/events", { replace: true });
    return null;
  }

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header showSearchBar={true} />
      {/* 麵包屑 */}
      <div className="max-w-7xl mx-auto w-full px-0 py-0">
        <Breadcrumb
          items={[
            { label: "首頁", to: "/" },
            { label: "活動資訊", to: "/events" },
            { label: event.title }
          ]}
        />
      </div>
      {/* 主視覺 */}
      <EventHero image={event.image} title={event.title} />
      <main className="flex-1 bg-bg px-0 py-0 max-w-7xl mx-auto w-full">
        {/* 立即購票按鈕 */}
        <div className="flex justify-center gap-4 mt-4 px-4">
          <Button className="bg-blue-600 text-white px-8 py-3 text-lg">立即購票</Button>
        </div>
        {/* 收藏與分享按鈕 */}
        <EventShareActions
          isFavorited={isFavorited}
          isLoggedIn={isLoggedIn}
          onFavorite={() => setIsFavorited(fav => !fav)}
        />
        {/* 活動說明 */}
        <EventDetailTabs eventId={event.id} />
      </main>
      <Footer />
    </div>
  );
}

// 分頁切換元件
function EventDetailTabs({ eventId }) {
  const [tab, setTab] = React.useState('intro');
  return (
    <div className="bg-white mt-0 px-4 md:px-12 py-8">
      <div className="sticky top-0 bg-white z-10 flex border-b border-gray-300 mb-6 overflow-x-auto">
        <button
          className={`px-4 py-2 text-lg font-bold border-b-2 transition-colors duration-150 whitespace-nowrap ${tab === 'intro' ? 'text-blue-800 border-blue-700' : 'text-gray-500 border-transparent hover:text-blue-700'}`}
          onClick={() => setTab('intro')}
          aria-selected={tab === 'intro'}
          aria-controls="intro"
          id="tab-intro"
          type="button"
        >
          活動介紹
        </button>
        <button
          className={`px-4 py-2 text-lg font-bold border-b-2 transition-colors duration-150 whitespace-nowrap ${tab === 'note' ? 'text-blue-800 border-blue-700' : 'text-gray-500 border-transparent hover:text-blue-700'}`}
          onClick={() => setTab('note')}
          aria-selected={tab === 'note'}
          aria-controls="note"
          id="tab-note"
          type="button"
        >
          注意事項
        </button>
      </div>
      <div id="intro" hidden={tab !== 'intro'}>
        <EventIntro eventId={eventId} />
      </div>
      <div id="note" hidden={tab !== 'note'}>
        <EventNote eventId={eventId} />
      </div>
    </div>
  );
}
