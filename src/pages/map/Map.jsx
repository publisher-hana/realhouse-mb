import './map.css'
import Header from '../../components/common/Header'
import { useEffect, useState } from 'react';
import Listing from '../../components/Listing/Listing';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
export const Map = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePopItems = () => {
    setIsExpanded((prev) => !prev);
  };
   useEffect(() => {
    // 클래스 추가
    document.body.classList.add("no-scroll");

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <>
      <Header title="서울시 송파구 잠실동" />
      <div className='map'>
        <img src='/realhouse-mb/images/map.jpg' style={{objectFit:'cover',height:'70vh'}}/>
      </div>
      <div className={`pop-items ${isExpanded ? 'expanded' : ''}`}>
        <button className='flex-between'  onClick={togglePopItems}><div>서울시 매물 (<em className='point'>3</em>)</div>
          <span>{isExpanded ? <IoIosArrowDown size={24} /> : <IoIosArrowUp size={24} />}</span>
        </button>
        <div className='items-wrap'>
          <Listing />
        </div>
      </div>
    </>
  )
}
