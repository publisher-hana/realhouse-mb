import Header from '../../components/common/Header';
import './inquiry.css';
import { IoIosArrowForward } from 'react-icons/io';

const notices = [
  {
    id: 1,
    title: '공지사항 제목이 나타납니다.',
    date: '23.10.10',
    isNew: true,
  },
  {
    id: 2,
    title: '공지사항 제목이 나타납니다.',
    date: '23.09.30',
    isNew: false,
  },
];

const NoticeList = () => {
  return (
    <div className="notice-list-page">
      <Header title="공지사항" />
      <div className="notice-list-content">
        {notices.map((notice) => (
          <div className="notice-list-item" key={notice.id}>
            <div className="notice-list-row">
              <span className="notice-list-title">{notice.title}</span>
              {notice.isNew && <span className="notice-list-badge">new</span>}
              <IoIosArrowForward className="notice-list-arrow" />
            </div>
            <div className="notice-list-date">{notice.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeList; 