import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './purchase.css';
import Header from '../../components/common/Header';

const NewRequest3 = () => {
  const navigate = useNavigate();
  const [selectedAgent, setSelectedAgent] = useState(null);

  // 컴포넌트 마운트/언마운트 시 body 스크롤 제어
  useEffect(() => {
    document.body.classList.add('new-request-open');
    document.documentElement.classList.add('new-request-open');
    
    return () => {
      document.body.classList.remove('new-request-open');
      document.documentElement.classList.remove('new-request-open');
    };
  }, []);

  const agents = {
    recommended: [
      {
        id: 1,
        name: "홍길동",
        rating: "1,321",
        office: "중개법인은성공인중개사사무소",
        address: "서울시 송파구 잠실동",
        distance: "5Km"
      }
    ],
    past: [
      {
        id: 2,
        name: "홍길남",
        rating: "1,000",
        office: "중개법인은성공인중개사사무소",
        address: "서울시 송파구 잠실동",
        distance: "5Km"
      }
    ],
    nearby: [
      {
        id: 3,
        name: "홍길남",
        rating: "1,000",
        office: "중개법인은성공인중개사사무소",
        address: "서울시 송파구 잠실동",
        distance: "5Km"
      }
    ]
  };

  const handleCancel = () => {
    navigate('/purchase');
  };

  const handleNext = () => {
    navigate('/purchase/new4');
  };

  const handleAgentSelect = (agentId) => {
    setSelectedAgent(agentId);
  };

  const handleRatingView = (agentId) => {
    // 평점 보기 로직
    console.log('View rating for agent:', agentId);
  };

  return (
    <div className="new-request-page">
      <Header title="매수/임차 중개의뢰" />

      {/* 안내 메시지 */}
      <div className="instruction-message">
        ※ 평점 및 매물과의 거리를 보고 중개사를 선택하십시오.
      </div>

      {/* 메인 컨텐츠 */}
      <div className="main-content">
        {/* 추천 중개사 */}
        <section className="agent-section">
          <h2 className="section-title">추천 중개사</h2>
          <div className="agent-list">
            {agents.recommended.map((agent) => (
              <div key={agent.id} className="agent-card">
                <div className="agent-info">
                  <div className="agent-name">{agent.name}</div>
                  <div className="agent-rating">
                    <span className="rating-text">평점:{agent.rating}</span>
                    <button 
                      className="rating-view-btn"
                      onClick={() => handleRatingView(agent.id)}
                    >
                      평점보기{'>'}
                    </button>
                  </div>
                  <div className="agent-office">{agent.office}</div>
                  <div className="agent-address">{agent.address}</div>
                </div>
                <div className="agent-actions">
                  <div className="agent-distance">{agent.distance}</div>
                  <button 
                    className={`select-agent-btn ${selectedAgent === agent.id ? 'selected' : ''}`}
                    onClick={() => handleAgentSelect(agent.id)}
                  >
                    선택
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 과거 의뢰 중개사 */}
        <section className="agent-section">
          <h2 className="section-title">과거 의뢰 중개사({agents.past.length})</h2>
          <div className="agent-list">
            {agents.past.map((agent) => (
              <div key={agent.id} className="agent-card">
                <div className="agent-info">
                  <div className="agent-name">{agent.name}</div>
                  <div className="agent-rating">
                    <span className="rating-text">평점:{agent.rating}</span>
                    <button 
                      className="rating-view-btn"
                      onClick={() => handleRatingView(agent.id)}
                    >
                      평점보기{'>'}
                    </button>
                  </div>
                  <div className="agent-office">{agent.office}</div>
                  <div className="agent-address">{agent.address}</div>
                </div>
                <div className="agent-actions">
                  <div className="agent-distance">{agent.distance}</div>
                  <button 
                    className={`select-agent-btn ${selectedAgent === agent.id ? 'selected' : ''}`}
                    onClick={() => handleAgentSelect(agent.id)}
                  >
                    선택
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 주변 중개사 */}
        <section className="agent-section">
          <h2 className="section-title">주변 중개사</h2>
          <div className="agent-list">
            {agents.nearby.map((agent) => (
              <div key={agent.id} className="agent-card">
                <div className="agent-info">
                  <div className="agent-name">{agent.name}</div>
                  <div className="agent-rating">
                    <span className="rating-text">평점:{agent.rating}</span>
                    <button 
                      className="rating-view-btn"
                      onClick={() => handleRatingView(agent.id)}
                    >
                      평점보기{'>'}
                    </button>
                  </div>
                  <div className="agent-office">{agent.office}</div>
                  <div className="agent-address">{agent.address}</div>
                </div>
                <div className="agent-actions">
                  <div className="agent-distance">{agent.distance}</div>
                  <button 
                    className={`select-agent-btn ${selectedAgent === agent.id ? 'selected' : ''}`}
                    onClick={() => handleAgentSelect(agent.id)}
                  >
                    선택
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer 상단 액션 버튼 */}
      <div className="footer-action-bar">
        <button className="action-button cancel-button" onClick={handleCancel}>
          취소
        </button>
        <div className="action-divider"></div>
        <button className="action-button next-button" onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default NewRequest3; 