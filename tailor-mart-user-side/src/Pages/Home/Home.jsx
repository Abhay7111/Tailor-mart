import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Small-screen-Navbar/Navbar';
import './Home.css'
function Home() {
  return (
    <div className='main-home'>
      <nav>
        <Navbar/>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Home
