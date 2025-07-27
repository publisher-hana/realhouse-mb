import Card from '../../components/home/Card'
import Listing from '../../components/home/Listing'
import { Search } from '../../components/home/Search'
import './homepage.css'
const Home = () => {
  return (
    <div className="main container">
      <h1 className="main-tit">헛걸음은 없다 <p>허위매물이 근본적으로<br />차단되는 하우스!</p></h1>
      <Search />
      <section className='section'>
        <Card title="오픈 추천 이벤트" 
          btnText="이벤트 확인/참여"
          type="event"
        />
      </section>
      <section className='section'>
        <Card title="관심 매물" 
          btnText="관심 매물 관리"
          type="favorte"
        />
      </section>
      <section className='section'>
        <div className='flex-between' style={{marginBottom:'20px'}}>
          <h2 className="section-title">관심매물</h2>
          <a href='' className='link-arr'>더보기</a>
        </div>
        <Listing /> 
      </section>
    </div>
  )
}

export default Home