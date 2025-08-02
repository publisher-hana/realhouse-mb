import './pay.css';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

const pointHistory = [
  {
    id: 1,
    desc: '수수료 결제(김길동-은성공인중개사무소)',
    date: '23.08.08',
    minus: '200,000원',
    plus: '',
    remain: '100,000원',
  },
  {
    id: 2,
    desc: '수수료 결제(김길동-은성공인중개사무소)',
    date: '23.08.01',
    minus: '',
    plus: '200,000원',
    remain: '300,000원',
  },
];

const Point = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title="포인트" />
      <div className="pay-content">
        <div className="point-content">
          {/* 포인트 잔액 카드 */}
          <div className="pay-balance-card">
            <span className="pay-balance-label">포인트</span>
            <span className="pay-balance-value">1,000,000원</span>
          </div>

          {/* 포인트 내역 */}
          <div className="pay-section">
            <div className="pay-section-title">포인트 내역</div>
            <div className="point-history-list">
              {pointHistory.map((item) => (
                <div className="point-history-item" key={item.id}>
                  <div className="point-history-row">
                    <span className="point-history-desc">{item.desc}</span>
                    <span className="point-history-date">{item.date}</span>
                  </div>
                  <div className="point-history-row">
                    {item.minus && <span className="point-history-minus">{item.minus}</span>}
                    {item.plus && <span className="point-history-plus">{item.plus}</span>}
                    <span className="point-history-remain">{item.remain}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Point;