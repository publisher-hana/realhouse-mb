import './home.css'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Listing = () => {
  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.6,
      slidesToScroll: 1,
      adaptiveHeight: false,
      touchMove: true,
      swipeToSlide: true,
    };
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Slider {...settings}>
        <div className="listings-slider">
          <div className="listing-card">
            <Link to="/fav">
              <figure><img src="/realhouse-mb/images/thumnail-room.jpg" alt="매물" /></figure>
              <div className="info">
                <strong className="price">매매 3억 5000 | 잠실동</strong>
                <p className="details">2억5000 | 원룸(개방형) | 82㎡(25)</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="listings-slider">
          <div className="listing-card">
            <Link to="/fav">
              <figure><img src="/realhouse-mb/images/thumnail-room.jpg" alt="매물" /></figure>
              <div className="info">
                <strong className="price">매매 3억 5000 | 잠실동</strong>
                <p className="details">2억5000 | 원룸(개방형) | 82㎡(25)</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="listings-slider">
          <div className="listing-card">
            <Link to="/fav">
              <figure><img src="/realhouse-mb/images/thumnail-room.jpg" alt="매물" /></figure>
              <div className="info">
                <strong className="price">매매 3억 5000 | 잠실동</strong>
                <p className="details">2억5000 | 원룸(개방형) | 82㎡(25)</p>
              </div>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Listing