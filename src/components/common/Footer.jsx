import { Link, useLocation } from "react-router-dom"
import './commonlayout.css'
const Footer = () => {
  const location = useLocation();
  return (
    <>
      <nav className="bottom-nav">
        <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
          <span className="icon home"><img
            src={
              location.pathname === "/"
                ? "/realhouse-mb/images/footer/footer_home_on.png"
                : "/realhouse-mb/images/footer/footer_home.png"
            }
            alt="홈"
          /></span>
          <span className="label">홈</span>
        </Link>
        <Link to="/map" className={`nav-item ${location.pathname === "/map" ? "active" : ""}`}>
          <span className="icon"> 
            <img
              src={
                location.pathname === "/map"
                  ? "/realhouse-mb/images/footer/footer_map_on.png"
                  : "/realhouse-mb/images/footer/footer_map.png"
              }
              alt="지도" />
          </span>
          <span className="label">지도</span>
        </Link>
        <Link to="/purchase" className={`nav-item ${location.pathname === "/purchase" ? "active" : ""}`}>
          <span className="icon">
            <img 
              src={
                location.pathname === "/purchase"
                  ? "/realhouse-mb/images/footer/footer_purchase_on.png"
                  : "/realhouse-mb/images/footer/footer_purchase.png"
              } 
              alt="중개현황" 
            />
          </span>
          <span className="label">중개현황</span>
        </Link>
        <Link to="/alarm" className={`nav-item ${location.pathname === "/alarm" ? "active" : ""}`}>
          <span className="icon badge-container">
            <img 
              src={
                location.pathname === "/alarm"
                  ? "/realhouse-mb/images/footer/footer_alarm_on.png"
                  : "/realhouse-mb/images/footer/footer_alarm.png"
              } 
              alt="알림" 
            />
            <span className="badge">4</span>
          </span>
          <span className="label">알림</span>
        </Link>
        <Link to="/more" className={`nav-item ${location.pathname === "/more" ? "active" : ""}`}>
          <span className="icon">
            <img 
              src={
                location.pathname === "/more"
                  ? "/realhouse-mb/images/footer/footer_more_on.png"
                  : "/realhouse-mb/images/footer/footer_more.png"
              } 
              alt="더보기" 
            />
          </span>
          <span className="label">더보기</span>
        </Link>
      </nav>
    </>
  )
}

export default Footer