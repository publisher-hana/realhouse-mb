import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './purchase.css';
import Header from '../../components/common/Header';

const NewRequest4 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // 컴포넌트 마운트/언마운트 시 body 스크롤 제어
  useEffect(() => {
    document.body.classList.add('new-request-open');
    document.documentElement.classList.add('new-request-open');
    
    return () => {
      document.body.classList.remove('new-request-open');
      document.documentElement.classList.remove('new-request-open');
    };
  }, []);

  const handleCancel = () => {
    navigate('/purchase');
  };

  const handleConfirm = () => {
    navigate('/purchase/new5');
  };



  const handleTimeSelect = () => {
    // 시간 선택 로직
    console.log('Time picker opened');
  };

  return (
    <div className="new-request-page">
      <Header title="매수/임차 중개의뢰" />

      {/* 메인 컨텐츠 */}
      <div className="main-content">
        {/* 방문시간 선택 섹션 */}
        <section className="visit-time-section">
          <h2 className="section-title">중개사무소 방문시간 선택</h2>
          
          {/* 방문일 선택 */}
          <div className="date-input-container">
            <label className="input-label">방문일 선택</label>
            <div className="date-input-wrapper">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-select"
              >
                <option value="">날짜를 선택하세요</option>
                <option value="2023.04.04(월)">2023.04.04(월)</option>
                <option value="2023.04.05(화)">2023.04.05(화)</option>
                <option value="2023.04.06(수)">2023.04.06(수)</option>
                <option value="2023.04.07(목)">2023.04.07(목)</option>
                <option value="2023.04.08(금)">2023.04.08(금)</option>
                <option value="2023.04.09(토)">2023.04.09(토)</option>
                <option value="2023.04.10(일)">2023.04.10(일)</option>
              </select>
            </div>
          </div>

          {/* 시간 선택 버튼 */}
          <button className="time-select-btn" onClick={handleTimeSelect}>
            시간 선택
          </button>
        </section>

        {/* 안내 정보 */}
        <section className="info-section">
          <div className="info-box">
            <div className="info-list">
              <div className="info-item">
                <span className="info-number">1.</span>
                <span className="info-text">
                  공인중개사가 전문가의 입장에서 좋은 매물을 추천합니다.
                </span>
              </div>
              <div className="info-item">
                <span className="info-number">2.</span>
                <span className="info-text">
                  추천매물을 확인 후, 마음에 드는 매물을 추가 방문요청하십시오.
                  <span className="info-note">(나의 매수에서 추가 방문요청 가능)</span>
                </span>
              </div>
              <div className="info-item">
                <span className="info-number">3.</span>
                <span className="info-text">
                  방문일시에 중개사무소를 방문하면 여러 개의 매물을 한번에 확인할 수 있어 빠르게 계약하실 수 있습니다.
                </span>
              </div>
            </div>
            
            {/* 경고 메시지 */}
            <div className="warning-message">
              ※ 중개사무소 방문일은 당일을 피하시는 것이 좋습니다.
            </div>
          </div>
        </section>
      </div>

      {/* Footer 상단 액션 버튼 */}
      <div className="footer-action-bar">
        <button className="action-button cancel-button" onClick={handleCancel}>
          취소
        </button>
        <div className="action-divider"></div>
        <button className="action-button confirm-button" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default NewRequest4; 