import React from "react";

export default function EventIntro({ eventId }) {
  // TODO: 之後可根據 eventId fetch 資料
  // 目前先用假資料
  return (
    <div className="pt-4">
      <h2 className="text-xl font-bold text-center mb-2">TWS TOUR '24/7:WITH:US' IN KAOHSIUNG</h2>
      <p className="text-center">42們追隨你們的內心，燃起所有熱情🔥<br/>1月31日與K-POP清涼的代名詞-TWS！<br/>一起嗨翻高雄流行音樂中心 🙌🏻</p>
      <div className="my-4 text-center text-yellow-600 font-medium">42們記得鎖定售票時間，不要錯過 💫</div>
      <ul className="mb-4 text-base">
        <li>🍞 42 MEMBERSHIP (GLOBAL) 官方會員預購登記：2025年11月21日(五)13:00 至 2025年11月23日(日)23:59 (Local Time)</li>
        <li>🍞 42 MEMBERSHIP (GLOBAL) 官方會員預購：2025年11月28日(五)19:00-23:59 (Local Time)</li>
        <li>🍞 全面開賣：2025年11月29日(六)13:00 (Local Time)</li>
      </ul>
      <div className="mb-2 font-bold">TWS TOUR '24/7:WITH:US' IN KAOHSIUNG</div>
      <ul className="mb-4 text-base">
        <li>📍演出日期：2026年01月31日(六)</li>
        <li>📍演出時間：19:00(實際演出時間以現場公告為準)</li>
        <li>📍演出地點：高雄流行音樂中心 海音館</li>
        <li>📍演出場地地址：803高雄市鹽埕區真愛路1號</li>
        <li>📍售票系統/網站：tixCraft拓元售票系統 (<a href="https://tixcraft.com/activity/detail/26_tws" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">活動連結</a>)</li>
        <li>📍活動票價：NT$5,980 / NT$4,680 / NT$3,480 / 身心席NT$2,340</li>
        <li>※ 票價NT$5,980為NT$5,970演出票券＋NT$10福利兌換券(福利內容：彩排＋專屬掛繩＋掛牌組)</li>
        <li>📍經紀公司：PLEDIS Entertainment</li>
        <li>📍主辦單位：D-SHOW TAIWAN</li>
      </ul>
      <div className="mb-2 text-sm text-gray-500">#TWS #투어스 #247WithUs #TWSTOUR #247WITHUS_IN_KAOHSIUNG #DSHOWTAIWAN</div>
      <div className="mt-6 flex flex-col items-center">
        <div className="text-blue-700 font-semibold mb-2">示意圖僅供參考示意</div>
        <img src="https://static.tixcraft.com/images/activity/field/26_tws_a1866a60b93013b1ae9426ca79a22e61.png" alt="場地示意圖" className="rounded shadow max-w-full" style={{width:'400px'}} />
      </div>
    </div>
  );
}
