# OpenTicket - 票務平台專案

OpenTicket 是一個全方位的線上票務平台，提供用戶瀏覽活動、購買票券、管理會員資訊等功能。本專案採用前後端分離架構，結合了現代化的開發技術。

## 👨‍💻 我的貢獻

在本项目中，我主要負責 **會員系統核心模組** 的開發，包含以下功能：

### 1. 會員登入與註冊系統
*   **多種登入方式**：實作一般帳號密碼登入及 **Google OAuth 2.0 第三方登入**。
*   **安全驗證**：後端採用 **JWT (JSON Web Token)** 進行身分驗證，並使用 **BCrypt** 進行密碼加密儲存。
*   **信箱驗證服務**：整合 **Spring Boot Mail** 服務，實作註冊驗證碼與密碼重置功能。
*   **Redis 快取**：利用 Redis 儲存與驗證暫時性的驗證碼（Verification Code），提高驗證效率。

### 2. 會員個人中心
*   **個人資料管理**：用戶可查看並修改基本資料（MemberInfo）。
*   **響應式側邊欄**：開發會員專屬導覽側邊欄（MemberSidebar），方便用戶在不同功能間切換。

### 3. 收藏功能 (WishList)
*   **活動收藏**：用戶可將感興趣的活動加入收藏清單，隨時追蹤最新動態。
*   **同步更新**：前後端即時同步收藏狀態，提供流暢的使用體驗。

### 4. 歷史紀錄與訂單管理
*   **購買歷史**：串接訂單系統，讓用戶查看所有過去的購票紀錄。
*   **票券管理**：整合 QRCode 顯示功能，方便用戶在活動現場進行驗證。

---

## 🛠️ 技術棧

### 前端 (Frontend)
*   **框架**: React 18
*   **建構工具**: Vite
*   **路由**: React Router DOM
*   **樣式**: Tailwind CSS, PostCSS
*   **第三方登入**: @react-oauth/google
*   **提示組件**: React Toastify

### 後端 (Backend)
*   **框架**: Spring Boot 3.5.7
*   **語言**: Java 17
*   **資料庫**: MySQL (配合 Spring Data JPA)
*   **快取**: Redis
*   **安全性**: Spring Security, JWT (jjwt)
*   **API 文件**: SpringDoc OpenAPI (Swagger)
*   **檔案儲存**: SMBj (SMB 檔案存取)

## 🚀 快速開始

### 前端啟動
```bash
cd otfrontend
npm install
npm run dev
```

### 後端啟動
1. 確保已安裝 JDK 17 與 MySQL。
2. 配置 `backend/src/main/resources/application.properties`。
3. 執行 Maven 指令：
```bash
cd backend
./mvnw spring-boot:run
```

---
*本專案持續開發中，旨在提供最優質的購票體驗。*
