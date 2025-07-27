import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/global.css'
import './styles/common.css'
import Home from './pages/home/Home';
import Footer from './components/common/Footer';
import { Map } from './pages/map/Map';
import Purchase from './pages/purchase/Purchase';
import NewRequest1 from './pages/purchase/NewRequest1';
import NewRequest2 from './pages/purchase/NewRequest2';
import NewRequest3 from './pages/purchase/NewRequest3';
import NewRequest4 from './pages/purchase/NewRequest4';
import NewRequest5 from './pages/purchase/NewRequest5';
import Alarm from './pages/alarm/Alarm';
import More from './pages/more/More';
import Event from './pages/event/Event';
import Favorite from './pages/favorite/Favorite';
import Point from './pages/pay/Point';
import PayCommission from './pages/pay/PayCommission';
import Inquiry from './pages/inquiry/Inquiry';
function App() {
  return (
    <>
      <Router>
        <div className='wrapper'>
          <div className='container-wrap'>
            <Routes>  
              <Route path='/' element={<Home />} />
              <Route path='/map' element={<Map />} />
              <Route path='/purchase' element={<Purchase />} />
              <Route path='/purchase/new1' element={<NewRequest1 />} />
              <Route path='/purchase/new2' element={<NewRequest2 />} />
              <Route path='/purchase/new3' element={<NewRequest3 />} />
              <Route path='/purchase/new4' element={<NewRequest4 />} />
              <Route path='/purchase/new5' element={<NewRequest5 />} />
              <Route path='/alarm' element={<Alarm />} />
              <Route path='/more' element={<More />} />
              <Route path='/event' element={<Event />} />
              <Route path='/fav' element={<Favorite />} />
              <Route path='/point' element={<Point />} />
              <Route path='/pay-commission' element={<PayCommission />} />
              <Route path='/inquiry' element={<Inquiry />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
