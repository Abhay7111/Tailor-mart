import { useState } from 'react'
import './Navbar.css'
function Navbar() {
    let [openPop, setOpenPop] = useState(false);
  return (
    <div className="all-size-navbar-main">
      <div className="logo">Tailor Mart</div>
      <div className="links">
        <div onClick={() => setOpenPop(true)} className="menu"><i className='ri-menu-line'></i></div>
      </div>

      {openPop && <div className='menu-pop'>
        <div className='menu-pop-close-btn'><i onClick={() => setOpenPop(false)} className="ri-close-line"></i></div>
        <div>sd</div>
      </div>}
    </div>
  )
}

export default Navbar
