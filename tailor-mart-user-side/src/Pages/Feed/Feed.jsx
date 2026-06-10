import Navbar from "../../Components/All-size-Navbar/Navbar"
import Popular_random from "../../Components/RandomProducts/Popular.random"


function Feed() {

  return (
    <div className="feed-main">
      <div className="feed-top-navbar">
        <Navbar/>
      </div>
      <div className="feed-search-bar"></div>
        <Popular_random/>
    </div>
  )
}

export default Feed