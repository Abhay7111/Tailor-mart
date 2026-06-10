import '../../Styles/commonStyle.css'
import Navbar from "../../Components/All-size-Navbar/Navbar";
import Popular_random from "../../Components/RandomProducts/Popular.random";
import SearchProduct from "../../Components/Search/searchProduct";
import FeedProductSelectbutton from '../../Components/Button/feedProductSelectbutton';
import { Outlet } from 'react-router-dom';

function Feed() {

  return (
    <div className="feed-main">
      <div className="feed-top-navbar">
        <Navbar/>
      </div>
      <div className="feed-search-bar">
       <SearchProduct /> 
      </div>
      <div className="commonStyle-flex-col-start gap-2.5">
        <h1 className="commonStyle-h1">Our most favoret</h1>
        <Popular_random/>
      </div>
      <div className={`feed-categories commonStyle-flex-col-start `}>
        <FeedProductSelectbutton />
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Feed