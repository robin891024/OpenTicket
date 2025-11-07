import React from 'react';
import Header from '../component/Header'; 
import Footer from '../component/Footer'; 
import NewsSection from '../component/NewsSection'; // 假設 NewsSection 包含列表內容


function News() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header /> 
      
      <main className="flex-grow">
        {/* 在 News 頁面渲染 NewsSection 組件 */}
        <NewsSection isFullPage={true} /> 
      </main>
      
      <Footer /> 
    </div>
  );
}

export default News;