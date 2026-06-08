import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
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
