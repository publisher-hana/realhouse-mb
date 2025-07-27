import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/common/Header';
import './inquiry.css';

const inquiries = [
  {
    id: 1,
    title: '문의제목이 나타납니다',
    status: '미답변',
    statusType: 'pending',
    date: '23.10.10',
    content: '문의 내용입니다.\n문의 내용입니다.\n문의 내용입니다.\n문의 내용입니다.',
  },
  {
    id: 2,
    title: '문의제목이 나타납니다2',
    status: '답변완료',
    statusType: 'done',
    date: '23.09.30',
    content: '문의 내용입니다.',
  },
];

const Inquiry = () => {
  return (
    <div className="inquiry-page">
      <Header title="1:1 문의" />
      <div className="inquiry-content">
        {inquiries.map((item) => (
          <Accordion key={item.id} className="inquiry-accordion" disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className="inquiry-summary"
            >
              <div className="inquiry-summary-top">
                <span className="inquiry-title">{item.title}</span>
                <span className={`inquiry-status-badge ${item.statusType}`}>{item.status}</span>
              </div>
              <div className="inquiry-date">{item.date}</div>
            </AccordionSummary>
            <AccordionDetails className="inquiry-details">
              {item.content.split('\n').map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Inquiry; 