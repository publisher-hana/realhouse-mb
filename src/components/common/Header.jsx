import { IoIosArrowBack } from "react-icons/io"
import './commonlayout.css'
import { useNavigate } from "react-router-dom";
const Header = ({title}) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // 뒤로가기
  };
  return (
    <header className="header">
      <button className="back" onClick={handleBack}><IoIosArrowBack /></button>
      {title}
    </header>
  )
}

export default Header