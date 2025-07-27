import './home.css'
import { useNavigate } from 'react-router-dom'

const Card = ({title, type, btnText}) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h2 className="section-title">{title}</h2>
       {type === 'event' && (
        <>
          <div className="text">
            10억 지급 오픈 이벤트가 <span className="strong">1달간 (5/31까지)</span> 진행되며<br />
            포인트는 중개수수료를 납부하실 수 있습니다.
          </div>
          <button 
              className="btn" 
              onClick={() => navigate('/event')}
            >
              {btnText}
            </button>
        </>
      )}

      {type === 'favorte' && (
        <>
          <div className="text">
            관심매물로 등록한 매물을 관리할 수 있습니다.
          </div>
          <button 
            className="btn" 
            onClick={() =>  navigate('/fav')}
          >
            {btnText}
          </button>
        </>
      )}
      
    </div>
  )
}

export default Card