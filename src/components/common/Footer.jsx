import { Link } from "react-router-dom"
import './commonlayout.css'
const Footer = () => {
  return (
    <>
      <nav className="bottom-nav">
        <Link className="nav-item active">
          <span className="icon">🏠</span>
          <span className="label">홈</span>
        </Link>
        <Link className="nav-item">
          <span className="icon">📍</span>
          <span className="label">지도</span>
        </Link>
        <Link className="nav-item">
          <span className="icon">🏢</span>
          <span className="label">중개현황</span>
        </Link>
        <Link className="nav-item">
          <span className="icon badge-container">
            🔔
            <span className="badge">4</span>
          </span>
          <span className="label">알림</span>
        </Link>
        <Link className="nav-item">
          <span className="icon">⋯</span>
          <span className="label">더보기</span>
        </Link>
      </nav>
    </>
  )
}

export default Footer