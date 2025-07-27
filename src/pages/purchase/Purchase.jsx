import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './purchase.css';

const Purchase = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('purchase');

  const purchaseRequests = [
    {
      id: 1,
      type: "주거용 | 월세",
      date: "23.06.10",
      status: "pending",
      message: "중개사가 아직 중개의뢰를 수락하지 않았습니다.",
      broker: null,
      metrics: {
        recommended: 0,
        visitRequests: 0,
        negotiations: 0,
        visitsCompleted: 0
      },
      scheduledVisit: "23.06.12(월) 14시 30분"
    },
    {
      id: 2,
      type: "주거용 | 월세",
      date: "23.06.10",
      status: "active",
      message: null,
      broker: "홍길동(은성공인중개사무소)",
      metrics: {
        recommended: 5,
        visitRequests: 12,
        negotiations: 10,
        visitsCompleted: 7
      },
      scheduledVisit: "23.06.12(월) 14시 30분"
    },
    {
      id: 3,
      type: "주거용 | 월세",
      date: "23.06.10",
      status: "active",
      message: null,
      broker: "김부동산(부동산중개사무소)",
      metrics: {
        recommended: 3,
        visitRequests: 8,
        negotiations: 5,
        visitsCompleted: 2
      },
      scheduledVisit: "23.06.15(목) 10시 00분"
    }
  ];

  const saleRequests = [
    {
      id: 1,
      type: "상가용 | 매매",
      date: "23.06.08",
      status: "active",
      message: null,
      broker: "이중개(상가중개사무소)",
      metrics: {
        recommended: 2,
        visitRequests: 6,
        negotiations: 4,
        visitsCompleted: 3
      },
      scheduledVisit: "23.06.14(수) 16시 00분"
    },
    {
      id: 2,
      type: "주거용 | 전세",
      date: "23.06.05",
      status: "pending",
      message: "중개사가 아직 중개의뢰를 수락하지 않았습니다.",
      broker: null,
      metrics: {
        recommended: 0,
        visitRequests: 0,
        negotiations: 0,
        visitsCompleted: 0
      },
      scheduledVisit: "23.06.16(금) 11시 30분"
    }
  ];

  const currentRequests = activeTab === 'purchase' ? purchaseRequests : saleRequests;

  return (
    <div className="purchase-page">
      {/* 탭 네비게이션 */}
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'purchase' ? 'active' : ''}`}
          onClick={() => setActiveTab('purchase')}
        >
          나의 매수({purchaseRequests.length})
        </button>
        <button 
          className={`tab-button ${activeTab === 'sale' ? 'active' : ''}`}
          onClick={() => setActiveTab('sale')}
        >
          나의 매도({saleRequests.length})
        </button>
      </div>

      {/* 메인 섹션 */}
      <div className="main-section">
        <h1 className="section-title">
          {activeTab === 'purchase' ? '나의매수' : '나의매도'}
        </h1>
        <div className="section-description">
          <p>
            {activeTab === 'purchase' 
              ? '매수/임차 중개의뢰를 통해 보다 좋은 매물을 빠르게 계약하실 수 있습니다.'
              : '매도/임대 중개의뢰를 통해 보다 좋은 구매자를 빠르게 찾으실 수 있습니다.'
            }
          </p>
          <button className="new-request-btn" onClick={() => navigate('/purchase/new1')}>
            신규 중개의뢰
          </button>
        </div>

        {/* 요청 목록 */}
        <div className="requests-list">
          {currentRequests.map((request) => (
            <div key={request.id} className="request-item">
              <div className="request-header">
                <span className="request-type">{request.type}</span>
                <span className="request-date">{request.date}</span>
              </div>
              
              {request.status === 'pending' && (
                <div className="status-message error">
                  {request.message}
                </div>
              )}
              
              {request.status === 'active' && request.broker && (
                <div className="broker-info">
                  <span className="broker-name">{request.broker}</span>
                                     <Link to="#" className="call-broker">중개사 통화{'>'}</Link>
                </div>
              )}
              
              <div className="metrics">
                <div className="metric-item">
                  <span className="metric-label">추천매물:</span>
                  <span className="metric-value">{request.metrics.recommended}</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">방문요청:</span>
                  <span className="metric-value">{request.metrics.visitRequests}</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">협의완료:</span>
                  <span className="metric-value">{request.metrics.negotiations}</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">방문완료:</span>
                  <span className="metric-value">{request.metrics.visitsCompleted}</span>
                </div>
              </div>
              
              <div className="scheduled-visit">
                방문예정일: {request.scheduledVisit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Purchase; 