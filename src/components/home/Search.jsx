import './home.css'
import { IoSearchOutline } from "react-icons/io5";
export const Search = () => {
  return (
    <div className="search-box">
      <input type="text" placeholder="지역 선택" />
      <button type="submit" className="search-btn">
        <IoSearchOutline size={24}/>
      </button>
    </div>
  )
}
