import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './purchase.css';
import Header from '../../components/common/Header';

const NewRequest2 = () => {
  const navigate = useNavigate();
  const [selectedProperties, setSelectedProperties] = useState([]);

  // 컴포넌트 마운트/언마운트 시 body 스크롤 제어
  useEffect(() => {
    document.body.classList.add('new-request-open');
    document.documentElement.classList.add('new-request-open');
    
    return () => {
      document.body.classList.remove('new-request-open');
      document.documentElement.classList.remove('new-request-open');
    };
  }, []);

  const properties = [
    {
      id: 1,
      image: "/realhouse-mb/images/thumnail-room.jpg",
      price: "월세 5억1000/50",
      info: "3룸 | 3층 | 82㎡(25)/100㎡(33)",
      tags: ["아파트", "욕실수리", "도배"],
      location: "잠실주공1단지 104동잠실",
      status: "seen", // SEEN 배지
      transactionComplete: false
    },
    {
      id: 2,
      image: "/realhouse-mb/images/thumnail-room.jpg",
      price: "월세 5억1000/50",
      info: "3룸 | 3층 | 82㎡(25)/100㎡(33)",
      tags: ["아파트", "욕실수리", "도배"],
      location: "잠실주공1단지 104동잠실",
      status: "normal",
      transactionComplete: true // 거래완료 배지
    },
    {
      id: 3,
      image: "/realhouse-mb/images/thumnail-room.jpg",
      price: "월세 5억1000/50",
      info: "3룸 | 3층 | 82㎡(25)/100㎡(33)",
      tags: ["아파트", "욕실수리", "도배"],
      location: "잠실주공1단지 104동잠실",
      status: "normal",
      transactionComplete: false
    }
  ];

  const handleCancel = () => {
    navigate('/purchase');
  };

  const handleNext = () => {
    navigate('/purchase/new3');
  };

  const togglePropertySelection = (propertyId) => {
    setSelectedProperties(prev => 
      prev.includes(propertyId)
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const handleSelectAll = () => {
    if (selectedProperties.length === properties.length) {
      setSelectedProperties([]);
    } else {
      setSelectedProperties(properties.map(p => p.id));
    }
  };

  return (
    <div className="new-request-page">
      <Header title="매수/임차 중개의뢰" />

      {/* 안내 메시지 */}
      <div className="instruction-message">
        ※ 관심매물 중 방문하고 싶은 매물을 모두 선택하십시오.
      </div>

      {/* 메인 컨텐츠 */}
      <div className="main-content">
        {/* 매물 목록 */}
        <div className="property-list">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image-container">
                <img src={property.image} alt="매물" className="property-image" />
                {property.status === 'seen' && (
                  <div className="image-overlay">
                    <span className="status-badge seen">SEEN</span>
                  </div>
                )}
                {property.transactionComplete && (
                  <div className="image-overlay">
                    <span className="status-badge complete">거래완료</span>
                  </div>
                )}
              </div>
              
              <div className="property-details">
                <div className="property-price">{property.price}</div>
                <div className="property-info">{property.info}</div>
                
                <div className="property-tags">
                  {property.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`property-tag ${index === 0 ? 'apartment' : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="property-location">{property.location}</div>
                
                <div className="property-actions">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={selectedProperties.includes(property.id)}
                      onChange={() => togglePropertySelection(property.id)}
                    />
                    <span className="checkmark"></span>
                    방문요청
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default NewRequest2; 