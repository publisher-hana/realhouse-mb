import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './alarm.css';
import Header from '../../components/common/Header';

const Alarm = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: "매물사진 삭제",
      time: "12:05",
      message: "워터마크 등으로 인해 사진의 일부 또는 전부가 삭제되었으며 평점이 감점되었습니다.",
      isNew: true
    },
    {
      id: 2,
      title: "의뢰인 방문",
      date: "23.05.15",
      message: "의뢰인 방문시간(18.09.03 11:50) 30분전 알림입니다.",
      isNew: false
    },
    {
      id: 3,
      title: "중개사무소 방문",
      date: "23.05.10",
      message: "은성공인중개사무소(홍길동) 방문시간(23.05.10 11:50) 30분전 알림입니다.",
      isNew: false
    },
    {
      id: 4,
      title: "메모 일정",
      date: "23.05.08",
      message: "매수/임차 중개의뢰의 메모일정(23.05.08 11:50) 30분전 알림입니다.",
      isNew: false
    }
  ];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="alarm-page">
      <Header title="알림" />

      {/* 알림 목록 */}
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <div key={notification.id} className="notification-item">
            <div className="notification-header">
              <h3 className="notification-title">{notification.title}</h3>
              <div className="notification-meta">
                {notification.isNew ? (
                  <>
                    <span className="notification-time">{notification.time}</span>
                    <span className="new-badge">new</span>
                  </>
                ) : (
                  <span className="notification-date">{notification.date}</span>
                )}
              </div>
            </div>
            <p className="notification-message">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alarm; 