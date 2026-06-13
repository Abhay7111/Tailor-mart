import './Navbar.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className='main-nav'>
      <div className="logo">Tailor Mart</div>

      <div className='ul'>
        <NavLink to={`/feed`} className={({isActive}) => isActive ? "btn-active com-btn" :`btn-deactive com-btn`}><i className='ri-home-3-line'></i><span>Home</span></NavLink>
        <NavLink to={`/categories`} className={({isActive}) => isActive ? "btn-active com-btn" :`btn-deactive com-btn`}><i className='ri-shopping-bag-line'></i><span>categories</span></NavLink>
        <NavLink to={`/cart`} className={({isActive}) => isActive ? "btn-active com-btn" :`btn-deactive com-btn`}><i className='ri-shopping-cart-line'></i><span>cart</span></NavLink>
        <NavLink to={`/profile`} className={({isActive}) => isActive ? "btn-active com-btn" :`btn-deactive com-btn`}><i className='ri-user-3-line'></i><span>Profile</span></NavLink>
      </div>
    </div>
  )
}

export default Navbar
