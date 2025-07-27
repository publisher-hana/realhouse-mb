import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './purchase.css';
import Header from '../../components/common/Header';

const NewRequest1 = () => {
  const navigate = useNavigate();
  const [selectedTransaction, setSelectedTransaction] = useState('전세');
  const [selectedProperty, setSelectedProperty] = useState('아파트');

  const transactionTypes = ['전세', '월세', '매매', '단기임대'];
  const propertyTypes = [
    '아파트', '주상복합', '연립/빌라', '오피스텔', '도시형',
    '다가구주택', '상가주택', '원룸주택', '단독/전원', '한옥주택', '타운하우스'
  ];

  // 컴포넌트 마운트/언마운트 시 body 스크롤 제어
  useEffect(() => {
    document.body.classList.add('new-request-open');
    
    return () => {
      document.body.classList.remove('new-request-open');
    };
  }, []);

  const handleCancel = () => {
    navigate('/purchase');
  };

  const handleNext = () => {
    navigate('/purchase/new2');
  };

  return (
    <div className="new-request-page">
      <Header title="매수/임차 중개의뢰" />

      {/* 안내 메시지 */}
      <div className="instruction-message">
        ※ 거래구분과 매물유형을 선택 후 [다음]을 클릭하십시오.
      </div>

      {/* 메인 컨텐츠 */}
      <div className="main-content">
        {/* 거래구분 섹션 */}
        <section className="selection-section">
          <h2 className="section-title">거래구분</h2>
          <div className="button-grid transaction-grid">
            {transactionTypes.map((type) => (
              <button
                key={type}
                className={`selection-button ${selectedTransaction === type ? 'selected' : ''}`}
                onClick={() => setSelectedTransaction(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        {/* 매물유형 섹션 */}
        <section className="selection-section">
          <h2 className="section-title">매물유형</h2>
          <div className="button-grid property-grid">
            {propertyTypes.map((type) => (
              <button
                key={type}
                className={`selection-button ${selectedProperty === type ? 'selected' : ''}`}
                onClick={() => setSelectedProperty(type)}
              >
                {type}
              </button>
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

export default NewRequest1; 