import './event.css';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

const Event = () => {
  const navigate = useNavigate();

  return (
    <div className="event-page">
      <Header title="오픈 추천 이벤트" />
      <div className="event-content">
        {/* 통계 카드 */}
        <div className="event-stats-card">
          <div className="event-stats-row">
            <span className="event-stats-label">총 추천: <span className="highlight">42</span>개</span>
            <span className="event-stats-label">보낸 추천: <span className="normal">21</span>개</span>
            <span className="event-stats-label">받은 추천: <span className="normal">21</span>개</span>
          </div>
          <div className="event-stats-row sub">
            <span className="event-rank">현재순위: <span className="highlight">4등(1,000위)</span></span>
            <span className="event-timer">남은 시간: <span className="blue">5일 4시간 30분</span></span>
          </div>
        </div>

        {/* 표 */}
        <div className="event-table">
          <div className="event-table-header">
            <span className="event-table-title red">참가 현황</span>
            <span className="event-table-title">보낸 추천</span>
            <span className="event-table-title">받은 추천</span>
          </div>
          <div className="event-table-row">
            <span className="event-table-cell">총 참가자</span>
            <span className="event-table-cell"></span>
            <span className="event-table-cell">2,000,000명</span>
          </div>
          <div className="event-table-row">
            <span className="event-table-cell red">1등</span>
            <span className="event-table-cell"></span>
            <span className="event-table-cell blue">500만원</span>
          </div>
          <div className="event-table-row">
            <span className="event-table-cell">10명(1~10위)</span>
            <span className="event-table-cell"></span>
            <span className="event-table-cell">총 5,000만원</span>
          </div>
          <div className="event-table-row">
            <span className="event-table-cell">현재 10위</span>
            <span className="event-table-cell"></span>
            <span className="event-table-cell red">추천 수: 330개</span>
          </div>
          <div className="event-table-row">
            <span className="event-table-cell red">2등</span>
            <span className="event-table-cell"></span>
            <span className="event-table-cell blue">100만원</span>
          </div>
          <div className="event-table-row">
            <span className="event-table-cell">50명(11~60위)</span>
            <span className="event-table-cell"></span>
            <span className="event-table-cell">총 5,000만원</span>
          </div>
          <div className="event-table-row">
            <span className="event-table-cell">현재 60위</span>
            <span className="event-table-cell"></span>
            <span className="event-table-cell red">추천 수: 211개</span>
          </div>
          <div className="event-table-row">
            <span className="event-table-cell red">3등</span>
            <span className="event-table-cell"></span>
            <span className="event-table-cell blue">50만원</span>
          </div>
          <div className="event-table-row">
            <span className="event-table-cell">500명(61~560위)</span>
            <span className="event-table-cell"></span>
            <span className="event-table-cell">총 25,000만원</span>
          </div>
        </div>

        {/* 추천하기 버튼 */}
        <button className="event-action-btn">추천하기</button>
      </div>
    </div>
  );
};

export default Event; 