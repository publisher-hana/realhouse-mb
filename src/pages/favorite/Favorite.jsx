import Header from '../../components/common/Header'
import Listing from '../../components/Listing/Listing'

const Favorite = () => {
  return (
    <div className="fav-page">
      <Header title="관심 매물" />
      <Listing /> 
    </div>
  )
}

export default Favorite