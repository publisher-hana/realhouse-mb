import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './purchase.css';
import Header from '../../components/common/Header';

const NewRequest5 = () => {
  const navigate = useNavigate();

  // 컴포넌트 마운트/언마운트 시 body 스크롤 제어
  useEffect(() => {
    document.body.classList.add('new-request-open');
    document.documentElement.classList.add('new-request-open');
    
    return () => {
      document.body.classList.remove('new-request-open');
      document.documentElement.classList.remove('new-request-open');
    };
  }, []);

  const handleConfirm = () => {
    navigate('/purchase');
  };

  return (
    <div className="new-request-page">
      <Header title="매수/임차 중개의뢰" />

      {/* 메인 컨텐츠 */}
      <div className="main-content">
        {/* 완료 메시지 */}
        <section className="completion-section">
          <h2 className="completion-title">
            매수/임차 중개의뢰가 완료되었습니다.
          </h2>
        </section>

        {/* 안내 정보 */}
        <section className="info-section">
          <div className="info-box">
            <div className="info-list">
              <div className="info-item">
                <span className="info-number">1.</span>
                <span className="info-text">
                  의뢰하신 공인중개사가 중개의뢰 승인 후 전화로 연락드립니다.
                </span>
              </div>
              <div className="info-item">
                <span className="info-number">2.</span>
                <span className="info-text">
                  공인중개사가 전문가의 입장에서 적합한 매물을 추천해드립니다.
                </span>
              </div>
              <div className="info-item">
                <span className="info-number">3.</span>
                <span className="info-text">
                                     추천매물을 확인 후, 추가로 방문하고 싶은 매물이 있으면 "나의 매수 {'>'} 의뢰현황"에서 "추가 방문요청"을 하실 수 있습니다.
                </span>
              </div>
              <div className="info-item">
                <span className="info-number">4.</span>
                <span className="info-text">
                  중개의뢰 현황에서 방문한 매물을 "방문완료"로 체크하여 계약을 진행하실 수 있습니다.
                </span>
              </div>
              <div className="info-item">
                <span className="info-number">5.</span>
                <span className="info-text">
                  방문한 매물이 마음에 들지 않아도 중개사무소 추가 방문을 통해 더 많은 매물을 확인하실 수 있습니다.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 추가 안내 정보 */}
        <section className="additional-info-section">
          <div className="additional-info-box">
            <div className="additional-info-item">
              <p className="additional-info-text">
                오전 9시 ~ 오후 6시 이후에 요청한 의뢰는 익일 공인중개사가 전화 드릴 수 있습니다.
              </p>
            </div>
            <div className="additional-info-item">
              <p className="additional-info-text">
                잠시만 기다리시면 곧 연락을 드리겠습니다.
              </p>
            </div>
            <div className="additional-info-item">
              <p className="additional-info-text">
                공인중개사가 중개의뢰를 거절하거나 2시간(업무시간 기준) 동안 의뢰를 승인하지 않을 경우 거리와 평점을 고려하여 다른 공인중개사에게 자동 중개의뢰 요청 처리됩니다.
              </p>
            </div>
          </div>
        </section>
      </div>

       <div className="footer-action-bar">
        <div className="action-divider"></div>
        <button className="action-button confirm-button" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default NewRequest5; 