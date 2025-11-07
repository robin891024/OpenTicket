import { Link } from 'react-router-dom'; // 確保導入 Link
import { Button } from "@/components/ui/button";


function Header() {
  return (
    // 保持 header 的 flex 和 justify-between 樣式
    <header className="flex justify-between items-center px-6 py-4 bg-text text-bg">
      
      {/* 左側群組：Logo + 主要連結 */}
      <div className="flex items-center space-x-6">
        
        {/* Logo 連結到首頁 */}
        <Link to="/" className="text-2xl font-bold text-primary">OpenTicket</Link>
        
        {/* Shows 連結到 /shows 頁面 (假設) */}
        <Link to="/shows" className="hover:underline">Shows</Link>
        
        {/* News 連結到 /news 頁面 (您已在 App.jsx 中設定) */}
        <Link to="/news" className="hover:underline">News</Link>
      </div>

      {/* 第二組：靠右的功能性連結/按鈕 */}
      <div className="flex items-center space-x-4">
        {/* 會員資訊連結到 /login 或 /profile 頁面 (假設) */}
        <Link to="/login" className="hover:underline">會員資訊</Link> 
        
        {/* Sign in 按鈕 (通常也連結到 /login) */}
        <Button variant="secondary" className="ml-2">
          {/* 由於 Button 通常是 HTML button，其點擊事件需要額外處理跳轉 */}
          <Link to="/login" className="text-text">Sign in</Link>
        </Button>
      </div>

    </header>
  );
}

export default Header;