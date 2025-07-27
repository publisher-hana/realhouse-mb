import './pay.css';
import Header from '../../components/common/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const agents = [
  {
    id: 1,
    name: '홍길동',
    phone: '010-0000-0000',
    office: '잠실제일공인중개사사무소',
  },
  {
    id: 2,
    name: '홍길동',
    phone: '010-0000-0000',
    office: '잠실제일공인중개사사무소',
  },
];

const PayCommission = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState(1);

  const handleAmountChange = (delta) => {
    setAmount((prev) => {
      let next = prev + delta * 100000;
      if (next < 0) next = 0;
      if (next > 1000000) next = 1000000;
      return next;
    });
  };

  return (
    <div className="pay-page">
      <Header title="중개수수료 결제" />
      <div className="pay-content">
        {/* 포인트 잔액 카드 */}
        <div className="pay-balance-card">
          <span className="pay-balance-label">포인트</span>
          <span className="pay-balance-value">1,000,000원</span>
        </div>

        {/* 결제 금액 */}
        <div className="pay-section">
          <div className="pay-section-title">결제 금액</div>
          <div className="pay-amount-row">
            <input
              type="number"
              className="pay-amount-input"
              min={0}
              max={1000000}
              step={100000}
              value={amount / 10000}
              readOnly
            />
            <span className="pay-unit">만원</span>
            <div className="pay-amount-btns">
              <button className="pay-amount-btn" onClick={() => handleAmountChange(1)}><IoIosArrowUp /></button>
              <button className="pay-amount-btn" onClick={() => handleAmountChange(-1)}><IoIosArrowDown /></button>
            </div>
          </div>
          <div className="pay-amount-desc">※ 결제 금액은 10만원 단위로 최대 100만원까지 가능합니다.</div>
        </div>

        {/* 중개사 선택 */}
        <div className="pay-section">
          <div className="pay-section-title">중개사 선택</div>
          <div className="pay-agent-list">
            {agents.map((agent) => (
              <div className="pay-agent-item" key={agent.id}>
                <div className="pay-agent-info">
                  <div className="pay-agent-name">{agent.name} {agent.phone}</div>
                  <div className="pay-agent-office">{agent.office}</div>
                </div>
                <button
                  className={`pay-agent-select-btn${selectedAgent === agent.id ? ' selected' : ''}`}
                  onClick={() => setSelectedAgent(agent.id)}
                >
                  선택
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 하단 버튼 */}
      <div className="pay-footer-bar">
        <button className="pay-footer-btn cancel">취소</button>
        <button className="pay-footer-btn confirm">수수료 결제</button>
      </div>
    </div>
  );
};

export default PayCommission; 