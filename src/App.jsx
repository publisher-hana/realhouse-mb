import { Route, HashRouter as Router, Routes, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/global.css'
import './styles/common.css'
import Header from './components/common/Header';
import Home from './pages/home/Home';
import Footer from './components/common/Footer';
function App() {
  return (
    <>
      <Router>
        <div className='wrapper'>
          <Header />
          <div className='container-wrap'>
            <Routes>  
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
