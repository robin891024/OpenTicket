import { useState, useEffect, useCallback } from "react";
// 引入需要的圖標：搜尋、左箭頭、右箭頭
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

// =========================================================
// 圖片載入模式配置
// =========================================================
const USE_HARDCODED_IMAGES = true; // <--- 暫時設為 true

// 硬編碼的圖片路徑 (對應 /public/images/)
const HARDCODED_IMAGE_PATHS = [
    '/images/test.jpg', 
    '/images/test_2.jpg',
    '/images/test_3.jpg',
];

// 遠端 API 的基礎 URL
const REMOTE_API_BASE_URL = 'http://localhost:8080'; 
const REMOTE_API_ENDPOINT = `${REMOTE_API_BASE_URL}/api/hero-images`;
// =========================================================

// 輪播間隔時間
const SLIDE_INTERVAL = 8000;

// 搜尋按鈕尺寸定義
const BUTTON_SIZE = '3.5rem'; 
const CONTAINER_HEIGHT = '4rem'; 
const PADDING_FOR_BUTTON = '4.0rem'; 

// 靜態 fallback 圖片 (如果 API 呼叫失敗時使用)
const FALLBACK_IMAGES = [
    "https://via.placeholder.com/1920x1080/f8f8f8/c0c0c0?text=Loading+Image+1",
    "https://via.placeholder.com/1920x1080/e0e0e0/c0c0c0?text=Loading+Image+2",
];


function Hero() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const [images, setImages] = useState([]); 
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // 判斷要使用的圖片列表：如果 images 狀態為空，則使用 fallback 圖片
    const activeImages = images.length > 0 ? images : FALLBACK_IMAGES;
    const imagesCount = activeImages.length; // 這是啟用左右按鈕的關鍵

    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = query.trim();
        if (keyword) {
            navigate(`/events?keyword=${encodeURIComponent(keyword)}`);
        } else {
            navigate('/events');
        }
    };

    // 載入圖片資料的 useEffect (加入硬編碼切換邏輯)
    useEffect(() => {
        if (USE_HARDCODED_IMAGES) {
            console.log('模式 1: 使用本地硬編碼圖片...');
            setImages(HARDCODED_IMAGE_PATHS);
            return;
        }

        // 模式 2: 呼叫遠端 API (原邏輯)
        const fetchImages = async () => {
            try {
                const response = await fetch(REMOTE_API_ENDPOINT); 
                const data = await response.json();
                const urlsWithBase = data.map(relativeUrl => REMOTE_API_BASE_URL + relativeUrl);
                
                if (urlsWithBase.length > 0) {
                    setImages(urlsWithBase);
                }
            } catch (error) {
                console.error("無法載入輪播圖片，使用 fallback 圖片。", error);
            }
        };

        fetchImages();
    }, []);

    // --- 輪播邏輯---
    const goToSlide = useCallback((index) => {
        let newIndex = index;
        if (newIndex >= imagesCount) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = imagesCount - 1;
        }
        setCurrentImageIndex(newIndex);
    }, [imagesCount]); // 依賴 imagesCount 確保邏輯正確

    const goToPrev = () => goToSlide(currentImageIndex - 1);
    const goToNext = () => goToSlide(currentImageIndex + 1);

    // 自動輪播計時器
    useEffect(() => {
        if (imagesCount > 1) { 
            const timer = setInterval(() => {
                // 使用 goToSlide 確保邊界處理正確
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesCount);
            }, SLIDE_INTERVAL); 
            return () => clearInterval(timer); 
        }
    }, [imagesCount, SLIDE_INTERVAL]); 
    // --------------------------------------------------

    // 左右箭頭共用樣式
    const arrowButtonClass = "absolute top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-40 hover:bg-opacity-60 text-white p-3 rounded-full z-30 transition cursor-pointer w-12 h-12 flex items-center justify-center";

    return (
        <section className="relative w-full flex flex-col justify-center items-center overflow-hidden min-h-[60vh] md:min-h-[75vh] lg:h-screen">
            
            {/* 輪播背景圖片容器 */}
            <div className="absolute inset-0 z-0">
                {activeImages.map((imageUrl, index) => (
                    <div 
                        key={index} 
                        style={{
                            backgroundImage: `url(${imageUrl})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
                            transition: 'opacity 1s ease-in-out',
                            opacity: index === currentImageIndex ? 1 : 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            // 刪除或註釋掉此行，避免圖片載入失敗時顯示白色背景
                            // backgroundColor: '#ffffff', 
                        }}
                    />
                ))}
            </div>

            {/* 左右箭頭導航：imagesCount 必須大於 1 才會顯示 */}
            {imagesCount > 1 && (
                <>
                    <div className={`${arrowButtonClass} left-4`} onClick={goToPrev}>
                        <ChevronLeft className="w-6 h-6" />
                    </div>
                    <div className={`${arrowButtonClass} right-4`} onClick={goToNext}>
                        <ChevronRight className="w-6 h-6" />
                    </div>
                </>
            )}

            {/* 內容區：置於背景圖片之上 */}
            <div className="relative z-20 text-center p-4 w-full">
                
                
                {/* 搜尋框部分 */}
                <div 
                    className="relative w-full max-w-xl mx-auto rounded-full shadow-lg h-14" 
                    style={{ height: CONTAINER_HEIGHT }} 
                >
                    <form
                        onSubmit={handleSearch}
                        className="flex items-stretch h-full"
                    >
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-grow px-8 text-lg text-gray-800 bg-white rounded-full outline-none placeholder-gray-400"
                            placeholder="搜尋活動" 
                            style={{ paddingRight: PADDING_FOR_BUTTON }}
                        />
                    </form>
                    
                    {/* 搜尋按鈕*/}
                    <button
                        type="submit"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-xl transition duration-200"
                        style={{
                            borderRadius: '50%',
                            width: BUTTON_SIZE, 
                            height: BUTTON_SIZE,
                            right: '0.4rem', 
                        }}
                        onClick={handleSearch}
                    >
                        <Search className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;