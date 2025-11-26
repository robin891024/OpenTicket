import { useState } from "react"
import "../Css/Register.css"
import { Link, useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode"

function Register() {
    const navigate = useNavigate()

    const [email_f, setEmail_f] = useState("");
    const [email_b, setEmail_b] = useState("");
    const [password, setPassword] = useState("");
    const [checkMessage, setCheckMessage] = useState("");
    const [cname, setCname] = useState("");
    const [location, setLocation] = useState("");
    const [alertMsg, setAlertMsg] = useState("");
    const [alertType, setAlertType] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isDark, toggleDarkMode] = useDarkMode();

    const showAlert = (message, type) => {
        setAlertMsg(message);
        setAlertType(type);
        setTimeout(() => {
            setAlertMsg("");
        }, 3000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email_f || !email_b || !password || !cname || !location) {
            showAlert("⚠️ 請完整填寫資料", "error");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/member/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    account : email_f + "@" + email_b,
                    password,
                    name: cname,
                    city: location || ""
                }),
            });

            if (!response.ok) throw new Error("伺服器回應錯誤");

            const data = await response.json();

            if (data.success) {
                showAlert("🎉 註冊成功！即將跳轉到登入頁面...", "success");
                setEmail_f("");
                setEmail_b("");
                setPassword("");
                setCname("");
                setLocation("");
                setCheckMessage("");

                setTimeout(() => {
                    navigate("/login");
                }, 2000)
            } else {
                showAlert("❌ 註冊失敗！", "error");
            }
        } catch (err) {
            showAlert("❌ 無法連線到伺服器", "error");
        }
    };

    const checkAc = async (e) => {
        e.preventDefault();

        if (!email_f.trim() || !email_b.trim()) {
            setCheckMessage("⚠️ 請輸入帳號");
            return;
        }

        try {
            const fullEmail = `${email_f}@${email_b}`
            const response = await fetch(`http://localhost:8080/member/checkAc?account=${fullEmail}`);
            if (!response.ok) throw new Error("伺服器回應錯誤");

            const isExist = await response.json();
            setCheckMessage(isExist ? "❌ 帳號已被使用" : "✅ 帳號可使用");
        } catch (err) {
            setCheckMessage("❌ 無法檢查帳號，請稍後再試");
        }
    };

    const cities = [
        "台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市",
        "基隆市", "新竹市", "新竹縣", "苗栗縣", "彰化縣", "南投縣",
        "雲林縣", "嘉義市", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣",
        "台東縣", "澎湖縣", "金門縣", "連江縣"
    ];

    return (
        <>
        
            {alertMsg && (
                <div className={`alert-bar ${alertType}`}>
                    {alertMsg}
                </div>
            )}

            <div className="register-page">
                {/* 深色模式切換按鈕 */}
                <button
                    className="dark-mode-toggle"
                    onClick={toggleDarkMode}
                    aria-label="切換深色模式"
                >
                    <span className="material-symbols-outlined">
                        {isDark ? "light_mode" : "dark_mode"}
                    </span>
                </button>
                
                <div className="register-container">
                    <div className="register-card">
                        <div className="register-header">
                            <h1>註冊</h1>
                            <p className="subtitle">建立您的新帳戶</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">帳號</label>
                                <div className="email-input-group">
                                    <input
                                        type="text"
                                        id="email_f"
                                        className="email-input-left"
                                        value={email_f}
                                        onBlur={checkAc}
                                        onChange={(e) => setEmail_f(e.target.value)}
                                        autoComplete="off"
                                        placeholder="使用者名稱"
                                        required
                                    />
                                    <span className="email-separator">@</span>
                                    <input
                                        type="text"
                                        id="email_b"
                                        className="email-input-right"
                                        value={email_b}
                                        onBlur={checkAc}
                                        onChange={(e) => setEmail_b(e.target.value)}
                                        autoComplete="off"
                                        placeholder="信箱網域"
                                        required
                                    />
                                </div>
                                {checkMessage && (
                                    <div className={`check-message ${checkMessage.includes('✅') ? 'success' : 'error'}`}>
                                        {checkMessage}
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">密碼</label>
                                <div className="password-input-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="off"
                                        placeholder="請輸入您的密碼"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? "隱藏密碼" : "顯示密碼"}
                                    >
                                        <span className="material-symbols-outlined">
                                            {showPassword ? "visibility_off" : "visibility"}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">姓名</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={cname}
                                    onChange={(e) => setCname(e.target.value)}
                                    autoComplete="off"
                                    placeholder="請輸入您的姓名"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="location">居住地</label>
                                <select
                                    id="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="location-select"
                                    required
                                >
                                    <option value="">請選擇您的居住地</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button type="submit" className="btn-primary">
                                註冊
                            </button>

                            <p className="login-link">
                                已經有帳戶了？
                                <Link to="/login">登入</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register