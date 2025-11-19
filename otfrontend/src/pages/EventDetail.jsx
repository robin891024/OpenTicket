import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

// 假資料，之後可改為 API 取得
const events = [
  {
    id: 1,
    image: "https://static.tixcraft.com/images/activity/26_billyrrom_b81ed522a9af6ae5799e0133213bdcb0.jpg",
    date: "2026/04/18 (六)",
    title: "Billyrrom Asia Tour 2026 “Jupiter=” in Taipei",
  },
  {
    id: 2,
    image: "https://static.tixcraft.com/images/activity/26_treasure_c_7f0cb49c30996800155dd7b759072472.jpg",
    date: "2026/03/28 (六)",
    title: "【Mastercard專區】2025-26 TREASURE TOUR [PULSE ON] IN TAIPEI",
  },
  {
    id: 3,
    image: "https://static.tixcraft.com/images/activity/26_treasure_8e5cabef2a455b291a9e6646f800eb63.jpg",
    date: "2026/03/28 (六)",
    title: "2025-26 TREASURE TOUR [PULSE ON] IN TAIPEI",
  },
  {
    id: 4,
    image: "https://static.tixcraft.com/images/activity/26_1rtp_9db4827c1d7503fb1952d400e0dfb5e9.jpg",
    date: "2026/03/04 (三)",
    title: "ONEREPUBLIC “From Asia， With Love” 2026 in Taipei",
  },
  {
    id: 5,
    image: "https://static.tixcraft.com/images/activity/26_1rtp_c_9b46bdb86275153f55ae1c6c875a1ff4.jpg",
    date: "2026/03/04 (三)",
    title: "【Mastercard專區】ONEREPUBLIC “From Asia， With Love” 2026 in Taipei",
  },
  {
    id: 6,
    image: "https://static.tixcraft.com/images/activity/26_1rtp_v_3bbc7e0b0ca2abf607c30e7b32136228.jpg",
    date: "2026/03/04 (三)",
    title: "ONEREPUBLIC “From Asia， With Love” 2026 in Taipei (VIP)",
  },
  {
    id: 7,
    image: "https://static.tixcraft.com/images/activity/26_mj116_a702095644966b2d152d4425a237c66d.png",
    date: "2026/01/31 (六) ~ 2026/02/01 (日)",
    title: "【非實名制區】頑童MJ116 OGS 台中洲際演唱會",
  },
  {
    id: 8,
    image: "https://static.tixcraft.com/images/activity/26_mj116_r_d4488bb56d87705bd8309d2e33b59e15.png",
    date: "2026/01/31 (六) ~ 2026/02/01 (日)",
    title: "【實名制區】頑童MJ116 OGS 台中洲際演唱會",
  },
  {
    id: 9,
    image: "https://static.tixcraft.com/images/activity/26_txt_5b6d3cd38800e24cb444113293a89d26.jpg",
    date: "2026/01/31 (六) ~ 2026/02/01 (日)",
    title: "TOMORROW X TOGETHER WORLD TOUR ＜ACT：TOMORROW＞ IN TAIPEI",
  },
  {
    id: 10,
    image: "https://static.tixcraft.com/images/activity/26_annbai_7023773ee544349b1ec8068e4487b6ae.jpg",
    date: "2026/01/25 (日) ~ 2026/03/07 (六)",
    title: "白安 ANN《路邊野餐 Summer Tryst》2026 New Album Live Tour",
  },
  {
    id: 11,
    image: "https://static.tixcraft.com/images/activity/26_sjkh_4d21e34d543b1879ea10feb8227d4d1b.jpg",
    date: "2026/01/24 (六) ~ 2026/01/25 (日)",
    title: "SUPER JUNIOR 20th Anniversary TOUR ＜SUPER SHOW 10＞ in KAOHSIUNG",
  },
  {
    id: 12,
    image: "https://static.tixcraft.com/images/activity/26_energy_6b7c339709b8938fbf01086933d97d9c.jpg",
    date: "2026/01/10 (六) ~ 2026/01/11 (日)",
    title: "Energy《ALL IN 全面進擊》台北小巨蛋演唱會",
  },
  {
    id: 13,
    image: "https://static.tixcraft.com/images/activity/25_whyte_d67c74c08e8e92e0f245168565be751d.jpg",
    date: "2025/12/28 (日)",
    title: "Whyte 2025 Live Concert Boundary",
  },
  {
    id: 14,
    image: "https://static.tixcraft.com/images/activity/25_mdbustc_f228736fc0ca611808755956f7c47ec5.png",
    date: "2025/12/27 (六) ~ 2026/01/04 (日)",
    title: "【歌迷返鄉專車】x 五月天 [ 回到那一天 ] 25 週年巡迴演唱會台中站",
  },
  {
    id: 15,
    image: "https://static.tixcraft.com/images/activity/25_mayday_p_e0f055de9f69c60585006943ecbcc319.jpg",
    date: "2025/12/27 (六) ~ 2026/01/04 (日)",
    title: "MAYDAY #5525 LIVE TOUR 五月天 [回到那一天] 25 週年巡迴演唱會 台中站．新年快樂版 親子套票專區",
  },
  {
    id: 16,
    image: "https://static.tixcraft.com/images/activity/25_mayday_c_add0dcf4f2887e5f40b6a3e8c34baa58.jpg",
    date: "2025/12/27 (六) ~ 2026/01/04 (日)",
    title: "MAYDAY #5525 LIVE TOUR 五月天 [回到那一天] 25 週年巡迴演唱會 台中站•新年快樂版 玉山卡友專區",
  },
  {
    id: 17,
    image: "https://static.tixcraft.com/images/activity/25_mayday_6d736a75b5affd6c3be6ba517493bea8.jpg",
    date: "2025/12/27 (六) ~ 2026/01/04 (日)",
    title: "MAYDAY #5525 LIVE TOUR 五月天 [回到那一天] 25 週年巡迴演唱會 台中站•新年快樂版",
  },
  {
    id: 18,
    image: "https://static.tixcraft.com/images/activity/25_dojacat_d1e54e162393bf7f54120a4cd937dee7.jpg",
    date: "2025/12/21 (日)",
    title: "Doja Cat – Ma Vie World Tour",
  },
  {
    id: 19,
    image: "https://static.tixcraft.com/images/activity/25_dojacat_c_934e94a84d0b905e58b6cb371c5304c6.jpg",
    date: "2025/12/21 (日)",
    title: "【Mastercard專區】Doja Cat – Ma Vie World Tour",
  },
  {
    id: 20,
    image: "https://static.tixcraft.com/images/activity/25_dojacat_v_b0fe66f659b800d4a9b1576ec96ef3f1.jpg",
    date: "2025/12/21 (日)",
    title: "【VIP Upgrade/升級VIP】Doja Cat – Ma Vie World Tour",
  },
  {
    id: 21,
    image: "https://static.tixcraft.com/images/activity/25_cosmos_bb2f924cedec2bb9322c370caadefd21.jpg",
    date: "2025/12/20 (六)",
    title: "vivo x 宇宙人 [ α：回到未來1986 ] 台北小巨蛋演唱會",
  },
  {
    id: 22,
    image: "https://static.tixcraft.com/images/activity/25_wakinkh_bfea1acf6db0976768a9a83dba487ee6.jpg",
    date: "2025/11/29 (六)",
    title: "周華健 少年的奇幻之旅3.0巡迴演唱會【高雄站】",
  },
  {
    id: 23,
    image: "https://static.tixcraft.com/images/activity/25_bbnomoney_80e9d98a081053cb8c45b521a62455bf.jpg",
    date: "2025/11/14 (五)",
    title: "bbno$：it’s pronounced baby no money",
  },
  {
    id: 24,
    image: "https://static.tixcraft.com/images/activity/25_bbnomoney_v_ac052ebba0e99ff24911a4d9582e238d.jpg",
    date: "2025/11/14 (五)",
    title: "【VIP Upgrade/升級VIP】bbno$：it’s pronounced baby no money",
  },
  {
    id: 25,
    image: "https://static.tixcraft.com/images/activity/25_jannabi_cb7ac723c43c94b6ee3f918252733680.jpg",
    date: "2025/11/09 (日)",
    title: "JANNABI LIVE：TAIPEI Ⅰ",
  },
];

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(e => String(e.id) === String(id));

  // 如果找不到活動，導回 /events
  if (!event) {
    navigate("/events", { replace: true });
    return null;
  }

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-bg px-0 py-0 max-w-7xl mx-auto w-full">
        {/* 麵包屑 */}
        <nav className="text-sm text-gray-700 mb-2 px-6 pt-4">
          <span className="hover:underline cursor-pointer" onClick={() => navigate("/")}>首頁</span>
          <span className="mx-2">/</span>
          <span className="hover:underline cursor-pointer" onClick={() => navigate("/events")}>節目資訊</span>
          <span className="mx-2">/</span>
          <span className="text-text">{event.title}</span>
        </nav>

        {/* 上半部：主視覺與按鈕 */}
        <div className="bg-black/90 pb-6">
          <div className="flex flex-col items-center justify-center">
            <img src={event.image} alt={event.title} className="max-w-2xl w-full rounded shadow-lg mt-4" style={{background:'#222'}} />
            <div className="text-2xl md:text-3xl font-bold text-white text-center mt-4 mb-2 drop-shadow-lg">
              {event.title}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 px-4">
            <Button className="bg-blue-600 text-white px-8 py-3 text-lg">立即購票</Button>
            <Button variant="outline" className="bg-gray-100 px-8 py-3 text-lg">購票流程<br className='hidden md:block'/>僅供參考</Button>
            <Button variant="outline" className="bg-gray-100 px-8 py-3 text-lg">取票流程<br className='hidden md:block'/>僅供參考</Button>
            <Button variant="outline" className="bg-gray-100 px-8 py-3 text-lg">退票申請表</Button>
          </div>
        </div>

        {/* 下半部：活動說明區塊 */}
        <div className="bg-white mt-0 px-4 md:px-12 py-8">
          <div className="flex flex-wrap border-b border-gray-300 mb-6">
            <div className="px-4 py-2 text-lg font-bold text-blue-800 border-b-2 border-blue-700">節目介紹</div>
            <div className="px-4 py-2 text-lg text-gray-500 cursor-pointer">注意事項</div>
            <div className="px-4 py-2 text-lg text-gray-500 cursor-pointer">購票提醒</div>
            <div className="px-4 py-2 text-lg text-gray-500 cursor-pointer">取票提醒</div>
            <div className="px-4 py-2 text-lg text-gray-500 cursor-pointer">退票說明</div>
          </div>
          <div className="text-base text-gray-800 leading-relaxed mb-6">
            Billyrrom：終於要回到我們的第二個故鄉，台北<br/>
            來自東京町田的寶藏樂團Billyrrom，以都會的電子旋律，打造出屬於他們的搖滾宇宙。近期發行最新專輯《Jupiter=》，並宣布展開亞洲巡迴，這一次，風將吹進台北！<br/><br/>
            自2020年成團以來，由六位大學生組成的Billyrrom以驚人速度登上 FUJI ROCK FESTIVAL、METROCK 等日本一線音樂祭舞台，以無可取代的靈魂律動與現場爆發力橫掃亞洲，成為樂迷口中「最值得親眼見證的下一代樂團」；2025年，他們與台灣樂團 Wendy Wander溫蒂漫步攜手推出跨國單曲《Nightglow Dreamer》，以最日系的台味、最台式的浪漫，衝破萬點關，廣受好評。<br/><br/>
            這次，就讓 Billyrrom 帶你潛入風暴，讓《DUNE》的風席捲整個夜晚，一切，就從《Once Upon a Night》開始！<br/><br/>
            <b>Billyrrom Asia Tour 2026 “Jupiter=” in Taipei</b><br/>
            ◦ 演出時間：2026/4/18（六）19:00（實際演出時間以現場公告為準）<br/>
            ◦ 演出地點：Legacy Taipei<br/>
            ◦ 票價：VIP NT$2,600／GA NT$1,800／當日票 NT$2,200／身障席 NT$900（請依票面序號整隊入場）<br/>
            ◦ 售票時間：2025.11.07（五）18:00<br/><br/>
            VIP福利：<br/>
            優先整隊入場<br/>
            VIP通行證
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
