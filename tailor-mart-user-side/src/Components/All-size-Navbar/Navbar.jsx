import { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
function Navbar() {
    let [openPop, setOpenPop] = useState(false);

    const Product_Buttons = [
      {
        name:'Sarees',
        logo:'https://cdn.pixabay.com/photo/2024/03/14/14/16/ai-generated-8633186_1280.jpg',
        origin:'saree'
      },
      {
        name:'Shirts',
        logo:'https://plus.unsplash.com/premium_photo-1661627681947-4431c8c97659?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin:'men-shirt'
      },
      {
        name:'T-Shirts',
        logo:'https://plus.unsplash.com/premium_photo-1669688174622-0393f5c6baa2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin:'men-t-shirt'
      },
      {
        name:'Sherwani',
        logo:'https://images.unsplash.com/photo-1760080838961-4208536db385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin:'Sherwani'
      },
      {
        name:'Men clothing',
        logo:'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin:'men-shirt'
      },
      {
        name:'Jeans',
        logo:'https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=753&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin:'men jeans'
      },
      {
        name:'women jeans',
        logo:'https://plus.unsplash.com/premium_photo-1689371953420-b6981e43fa38?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin:'women jeans'
      },
      {
        name:'Kurti',
        logo:'https://images.unsplash.com/photo-1759840278511-f73a3d62fb9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin:'women kurti'
      },
      {
        name:'Women Suit',
        logo:'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        origin:'women suit'
      },
    ]
  return (
    <div className="all-size-navbar-main">
      <div className="logo">Tailor Mart</div>
      <div className="links">
        <div onClick={() => setOpenPop(true)} className="menu"><i className='ri-menu-line'></i></div>
      </div>

      {!openPop && <div className='menu-pop'>
        <div className='menu-pop-close-btn'><i onClick={() => setOpenPop(false)} className="ri-close-line"></i></div>
        <div className="Product-Buttons">
          {Product_Buttons.map((items, index) => (
            <NavLink onClick={() => setOpenPop(false)} to={`/feed/${items.origin}`} className="button">
              <img src={items.logo} alt="" />
              <p className='button-text'>{items.name}</p>
            </NavLink>
          ))}
        </div>
        <div className="seasonal-product-buttons">
          <h1>seasonal</h1>

          <div className="button">
            summer
          </div>
          <div className="button">
            winter
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Navbar
