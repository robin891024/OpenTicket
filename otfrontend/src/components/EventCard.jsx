import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// 假設 event 物件包含 id, image, title, eventStart 屬性
// onClick 處理點擊導航的行為
export default function EventCard({ event, onClick }) {
    // 渲染向下箭頭的 SVG 路徑
    const ArrowIcon = (
        <svg className="absolute bottom-2 right-2 text-gray-400" viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false">
            <path d="M6.99 9.16a.6.6 0 00-.4-.16.6.6 0 00-.42.16.5.5 0 00-.17.37c0 .14.07.28.17.37l5.45 4.92c.04.06.09.1.15.15.14.05.3.05.44 0a.6.6 0 00.18-.11l5.45-4.92a.5.5 0 00.16-.37.5.5 0 00-.16-.37.6.6 0 00-.41-.16.6.6 0 00-.41.16l-5.03 4.46-5-4.5z"></path>
        </svg>
    );

    return (
        <Card
            key={event.id}
            className="bg-white shadow-lg cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition duration-300 p-0 overflow-hidden rounded-xl"
            onClick={onClick}
        >
            <div className="thumbnails">
                <div className="thumb-shadow relative">
                    {/* 活動圖片 */}
                    <img
                        src={event.image || "https://placehold.co/600x400/eeeeee/333333?text=No+Image"}
                        alt={event.title}
                        className="w-full h-48 object-cover rounded-t-xl"
                        onError={e => (e.target.src = "/images/no-image1.png")}
                    />
                    {/* 下箭頭SVG */}
                    {ArrowIcon}
                </div>
                <div className="data p-4">
                    {/* 活動日期 (假設 eventStart 已經是格式化好的字串) */}
                    <div className="date text-gray-500 text-sm mb-1">{event.eventStart || "日期未定"}</div>
                    {/* 活動標題 */}
                    <div className="font-bold text-xl text-gray-900 leading-snug line-clamp-2">
                        {event.title}
                    </div>
                </div>
            </div>
        </Card>
    );
}