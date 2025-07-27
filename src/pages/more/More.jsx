import { useNavigate } from 'react-router-dom';
import './more.css';
import Header from '../../components/common/Header';

const More = () => {
  const navigate = useNavigate();

  const notices = [
    {
      id: 1,
      title: "해당 공지사항이 나타납니다. 해당 공지...",
      date: "2023.04.05",
      isNew: true
    },
    {
      id: 2,
      title: "해당 공지사항이 나타납니다.",
      date: "2023.04.05",
      isNew: true
    }
  ];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="more-page">
      <Header title="더보기" />

      <div className="more-content">
        {/* 사용자 정보 섹션 */}
        <section className="section user-info-section">
          <h2 className="user-name">홍길동</h2>
          <p className="user-email">your@gmail.come</p>
        </section>

        {/* 중개의뢰 관리요청 섹션 */}
        <section className="section management-section">
          <div className="section-header">
            <h3 className="section-title">
              중개의뢰 관리요청<span className="count-badge">3</span>
            </h3>
          </div>
          <p className="section-description">
            지인이나 중개사가 중개의뢰를 관리요청한 내역이 나타납니다.
          </p>
          <button className="section-link">관리요청 확인 &gt;</button>
        </section>

        {/* 포인트 섹션 */}
        <section className="section points-section">
          <div className="section-header">
            <h3 className="section-title points-title">포인트</h3>
            <span className="points-balance">100,000원</span>
          </div>
          <div className="points-actions">
            <button className="points-link" onClick={() => navigate('/point')}>포인트 내역</button>
            <div className="divider"></div>
            <button className="points-link" onClick={() => navigate('/pay-commission')}>중개수수료 결제</button>
          </div>
        </section>

        {/* 1:1문의 섹션 */}
        <section className="section inquiry-section">
          <div className="section-header">
            <h3 className="section-title">
              1:1문의<span className="count-badge">1</span>
            </h3>
          </div>
          <p className="section-description">
            궁금하신 사항이나 개선사항 등을 문의하십시오.
          </p>
          <button className="section-link" onClick={() => navigate('/inquiry')}>문의 관리 &gt;</button>
        </section>

        {/* 공지사항 섹션 */}
        <section className="section notices-section">
          <div className="section-header">
            <h3 className="section-title">공지사항</h3>
            <button className="more-link" onClick={() => navigate('/notice-list')}>더보기&gt;</button>
          </div>
          <div className="notices-list">
            {notices.map((notice) => (
              <div key={notice.id} className="notice-item">
                <span className="notice-title">{notice.title}</span>
                {notice.isNew && <span className="new-badge">new</span>}
                <span className="notice-date">{notice.date}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default More; 